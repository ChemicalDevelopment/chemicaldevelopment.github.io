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
    verifyEmail();
    setTimeout(function() {   
        setuserdata("email", email);
    }, 1000);
}

function verifyEmail() {
    usr.sendEmailVerification();
}

function signin(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
}

function resetpw() {
    var email;
    if (usr == null || usr.email == null) {
        email = $('#reset_email').val;
    } else {
        email = usr.email;
    }
    firebase.auth().sendPasswordResetEmail(email);
}

function signout() {
    firebase.auth().signOut().then(function () {

    }, function (error) {
        
    });
    $("#actioninfo").show();
    $("#actiondiv").show();
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
    var data_array = [["User", "Consecutive", "Distinct", "equation"]];
    for (val in da.functions) {
        var cda = da.functions[val];
        var eq = cda.equation;
        for (var ii = 0; ii < eq.length; ++ii) {
            eq[ii] = parseInt(eq[ii]);
        }
        data_array.push([da.name, cda.consecutive, cda.distinct, "$ " + print_quad(eq[0],eq[1],eq[2]) + " $"]);
    }
    makeTable($("#" + id), data_array);
    MathJax.Hub.Queue(["Typeset",MathJax.Hub,id]);
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

function createref(id, dist, cons, equa) {
    var nm = "";
    for (var k = 0; k < func[i].equation.length; ++k) {
        nm += "(" + func[i].equation[k] + ")";
        if (k != func[i].equation.length - 1) {
            nm += "-";
        }
    }
    var x = { 
        consecutive: cons,
        distinct: dist,
        equation: equa
    };
    database.ref("user_data/" + id + "/functions/" + nm).set(x);
}

function getWorkName(work) {
    var nm = "(";
    var i;
    for (i = 0; i < work.ranges.length; ++i) {
        nm += work.ranges[i];
        if (i != work.ranges.length - 1) {
            nm += "-";
        }
    }
    nm += ")-(";
    for (i = 0; i < work.offsets.length; ++i) {
        nm += work.offsets[i];
        if (i != work.offsets.length - 1) {
            nm += "-";
        }
    }
    nm += ")";
    return nm;
}

function createworkload(work) {
    database.ref("/workloads/" + getWorkName(work)).set(work);
}


function setuserdata(name, value) {
    database.ref('user_data/' + usr.uid + "/" + name).set(value);
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
    database.ref("user_data/" + usr.uid + "/name").set(usr.email);
    updateuserdata();
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

function print_quad(i, j, k) {
    var res = "";
    if (k != 0) {
        if (k < 0) {
            res += "-";
        }
        if (Math.abs(k) != 1) {
            res += Math.abs(k);
        }
        res += "x^2";
    }
    if (j != 0) {
        if (j < 0) {
            res += "-";
        } else {
            res += "+";
        }
        if (Math.abs(j) != 1) {
            res += Math.abs(j);
        }
        res += "x";

    }
     if (i != 0) {
        if (i < 0) {
            res += "-";
        } else {
            res += "+";
        }
        if (Math.abs(i) != 1) {
            res += Math.abs(i);
        }
    }
    return res;
}
setbutton('ib');

init();