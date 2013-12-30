#-*- coding:utf-8 -*-
#!/usr/bin/python
import sys
sys.path.append('D:\workspace-zlxt\jordan2\src\py')
#sys.path.append('/usr/lib/python2.7/py')
from hive_service import ThriftHive
from hive_service.ttypes import HiveServerException
from thrift import Thrift
from thrift.transport import TSocket
from thrift.transport import TTransport
from thrift.protocol import TBinaryProtocol
from datetime import datetime
from urllib2 import urlopen


hive_server_ip='120.72.37.42'
hive_server_port=10000

def hiveExe(sql):
    try:
        transport = TSocket.TSocket(hive_server_ip, hive_server_port)
        transport = TTransport.TBufferedTransport(transport)
        protocol = TBinaryProtocol.TBinaryProtocol(transport)
        client = ThriftHive.Client(protocol)
        transport.open()

        print "begin time is : " + str(datetime.now())
        client.execute(sql)
        for val in client.fetchAll():
            print val.split("\t");
        print "end time is : " + str(datetime.now())
        transport.close()
    except Thrift.TException, tx:
        print '%s' % (tx.message)

def outputToJordan():
    pass


if __name__ == '__main__':
    hive_sql="select * from request2 limit 10 "
    global urlList
    urlList = hiveExe(hive_sql)
    print urlList
    