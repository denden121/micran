import ldap

def connect(username, password):
    con = ldap.initialize("ldap://ldap.micran.ru")
    con.set_option(ldap.OPT_REFERRALS, 0)
    con.set_option(ldap.OPT_PROTOCOL_VERSION, 3)
    con.PORT = 390
    login = "uid=" + username + ',ou=People,dc=localnet,dc=micran'
    status = con.simple_bind(login, password)
    if status:
        return True
    return False