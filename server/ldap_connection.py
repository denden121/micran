import ldap

def connect(username, password):
    con = ldap.initialize("ldap://ldap.micran.ru")
    con.set_option(ldap.OPT_REFERRALS, 0)
    con.set_option(ldap.OPT_PROTOCOL_VERSION, 3)
    con.PORT = 390
    basedn = "ou=People,dc=localnet,dc=micran"
    login = "uid=" + username + ',ou=People,dc=localnet,dc=micran'
    filter = "uid=" + username
    search_atr = ["sn", "cn", "mail", "employeeNumber", "entryUUID"]
    con.simple_bind(login, password)
    results_2 = con.search(basedn, ldap.SCOPE_ONELEVEL, filter, search_atr)
    results_1 = con.search(basedn, ldap.SCOPE_BASE, filter, search_atr)
    for result in results_1:
        print('DN'.rjust(15) + ' = ' + result[0].decode('utf-8'))
    for result in results_2:
        print('DN'.rjust(15) + ' = ' + result[0].decode('utf-8'))
    con.unbind_s()


username = ""
password = ""
connect(username, password)