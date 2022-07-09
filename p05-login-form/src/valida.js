var ldap = require("ldapjs");

/*update the url according to your ldap address*/

var url = new URL("ldap://192.168.41.51:389");
var client = ldap.createClient({
  url: url.toString,
});

/*use this to create connection*/
export const authenticateDN = (username, password) => {
  /*bind use for authentication*/
  client.bind(username, password, function (err) {
    if (err) {
      console.log("Error in new connetion " + err);
      return false;
    } else {
      /*if connection is success then go for any operation*/
      console.log("Success");
      return true;
      //searchUser();
      //addUser();
      //deleteUser();
      //addUserToGroup('cn=Administrators,ou=groups,ou=system');
      //deleteUserFromGroup('cn=Administrators,ou=groups,ou=system');
      //updateUser('cn=test,ou=users,ou=system');
      //compare('cn=test,ou=users,ou=system');
      //modifyDN("cn=bar,ou=users,ou=system");
    }
  });
};

/*use this to search user, add your condition inside filter*/
function searchUser() {
  var opts = {
    //  filter: '(objectClass=*)',  //simple search
    //  filter: '(&(uid=2)(sn=John))',// and search
    filter: "(|(uid=frodrigue53m))", // or search
    scope: "sub",
    attributes: ["sn"],
  };

  client.search("ou=users,ou=tenerife,o=sjd", opts, function (err, res) {
    if (err) {
      console.log("Error in search " + err);
    } else {
      res.on("searchEntry", function (entry) {
        console.log("entry: " + JSON.stringify(entry.object));
      });
      res.on("searchReference", function (referral) {
        console.log("referral: " + referral.uris.join());
      });
      res.on("error", function (err) {
        console.error("error: " + err.message);
      });
      res.on("end", function (result) {
        console.log("status: " + result.status);
      });
    }
  });
}
