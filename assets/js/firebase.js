var config = {
    //Public key for my project
    apiKey: "AIzaSyC6R2fqZN9eRFzr88nebDqvA_VwNKtzJQY",
    authDomain: "pgsdb-c4faf.firebaseapp.com",
    databaseURL: "https://pgsdb-c4faf.firebaseio.com",
    storageBucket: "pgsdb-c4faf.appspot.com",
};
app = firebase.initializeApp(config);
var database = firebase.database();
var usr = null;
var hasInit = false;
var usr_data = null;
var public_data = null;
var provider = new firebase.auth.GoogleAuthProvider();

function createaccount(email, password) {
    usr = firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
    signin(email, password);
    database.ref("user_data/" + usr.uid + "/name").set(usr.email);
    usr.sendVerificationEmail();
}

function signin(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
}

function signout() {
    firebase.auth().signOut().then(function () {
    }, function (error) {

    });
    $("#actioninfo").show();
    $("#actiondiv").show();
}

var lv = "";

function setbutton(v) {
    if (lv == v) {
        $('#actiondiv').toggle();
        return;
    }
    lv = v;
    $('#actiondiv').show();
    $('#' + v).show();
    $('#' + ((v == 'ib') ? ('ub') : ('ib'))).hide();
}


function makeTable(container, data) {
    container.html("");
    var table = $("<table/>").addClass('CSSTableGenerator');
    $.each(data, function(rowIndex, r) {
        var row = $("<tr/>");
        $.each(r, function(colIndex, c) { 
            row.append($("<t"+(rowIndex == 0 ?  "h" : "d")+"/>").text(c));
        });
        table.append(row);
    });
    return container.append(table);
}

function updateuserdata(id, da) {
    var data_array = [["User", "Ranges", "Equation"]];
    for (val in da.functions) {
        var cda = da.functions[val];
        data_array.push([da.name, cda.ranges, "$ " + cda.equation + " $"]);
    }
    makeTable($("#" + id), data_array);
    MathJax.Hub.Queue(["Typeset",MathJax.Hub,id]);
}

function createref(id, r, e) {
    var x = { 
        ranges: r, 
        equation: e
    };
    database.ref("user_data/" + id + "/functions").push(x);
}

firebase.auth().onAuthStateChanged(function (user) {
    usr = user;
    if (usr != null) {
        $("#actioninfo").hide();
        $("#actiondiv").hide();
        $("#userdata_section").show();
        init();
    } else {
        $("#actioninfo").show();
        $("#actiondiv").show();
        $("#userdata_section").hide();
    }
});


function init() {
    var pData = firebase.database().ref('user_data/public');
    pData.on('value', function (snapshot) {
        public_data = snapshot.val();
        updateuserdata('public', public_data);
    });
    var myData = firebase.database().ref('user_data/' + usr.uid);
    myData.on('value', function (snapshot) {
        usr_data = snapshot.val();
        updateuserdata('userdata', usr_data);
    });
}
setbutton('ib');

init();