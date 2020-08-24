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
    con_result = con.search(basedn, ldap.SCOPE_SUBTREE, filter, search_atr)
    print(con_result)
    con.unbind_s()


username = ""
password = ""
connect(username, password)