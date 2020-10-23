# app server
from flask import Flask
from flask import request
from flask import abort
app = Flask(__name__)
import os
port = int(os.environ.get('PORT', 3000))

# Cloud Foundry
from cfenv import AppEnv
from sap import xssec
env = AppEnv()
hana_service = 'hana'
hana = env.get_service(label=hana_service)
uaa_service = env.get_service(name='myxsuaa').credentials

# SAP HANA Client
from hdbcli import dbapi
# SQL statement
sql = "select * from SYS.M_DATABASE"

# home page
@app.route('/')
def hello():
    return "Hello World"

@app.route('/hana')
def db():
    if 'authorization' not in request.headers:
        abort(403)
    access_token = request.headers.get('authorization')[7:]
    security_context = xssec.create_security_context(access_token, uaa_service)
    isAuthorized = security_context.check_scope('openid')
    if not isAuthorized:
        abort(403)
    if hana is None:
        return "Can't connect to HANA service '{}' – check service name?".format(hana_service)
    else:
        conn = dbapi.connect(address=hana.credentials['host'], port=int(hana.credentials['port']), user=hana.credentials['user'], password=hana.credentials['password'], encrypt='true', sslTrustStore=hana.credentials['certificate'])
        cursor = conn.cursor()
        cursor.execute(sql)
        rows = cursor.fetchall()
        cursor.close()
        conn.close()
        return "SAP HANA Cloud returns: " + str(rows)

# start app server
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=port)
