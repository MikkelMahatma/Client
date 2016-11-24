/**
 * Created by mikkelaltmann on 11/11/2016.
 */
/*var SDK = {

    serverURL: "https://localhost:8000",

    request: function (options, cb) {

        //Take care of headers
        var headers = {};
        if (options.headers) {
            Object.keys(options.headers).forEach(function (h) {
                headers[h] = (typeof options.headers[h] === 'object') ? JSON.stringify(options.headers[h]) : options.headers[h];
            });
        }

        //Perform XHR
        $.ajax({
            url: SDK.serverURL + options.url,
            method: options.method,
            dataType: "json",
            headers: headers,
            xhrFields: {withCredentials: true},
            data: JSON.stringify(options.data),
            success: function (data, status, xhr) {
                cb(null, data, status, xhr);
            },
            error: function (xhr, status, errorThrown) {
                cb({xhr: xhr, status: status, error: errorThrown});
            }
        });
    },

    Books: {
        getAll: function (cb) {
            SDK.request({method: "GET", url: "/getbooks", headers: {filter: {include: ["books"]}}}, cb);
        },
        create: function (data, cb) {
            SDK.request({
                method: "POST",
                url: "/books",
                data: data,
                headers: {authorization: SDK.Storage.load("tokenId")}
            }, cb);
        }
    },

    User: {
        getAll: function (cb) {
            SDK.request({method: "GET", url: "/staffs"}, cb);
        },
        current: function () {
            return SDK.Storage.load("user");
        },
        create: function (data, cb) {
            SDK.request({method: "POST", url: "/createuser", data: data}, cb);


        },

        Edition: {
            getAll: function (cb) {
                SDK.request({method: "GET", url: "/edition"}, cb);
            }
        },

        Author: {
            getAll: function (cb) {
                SDK.request({method: "GET", url: "/author"}, cb);
            }
        },

        logOut: function () {
            SDK.Storage.remove("tokenId");
            SDK.Storage.remove("userId");
            SDK.Storage.remove("user");
        },

        login: function (username, password, cb) {
            this.request({
                data: {
                    username: username,
                    password: password
                },
                url: "/login",
                method: "POST"
                }, function (err, data) {

                //On login-error
                if (err) return cb(err);

                SDK.Storage.persist("tokenId", data.id);
                SDK.Storage.persist("userId", data.userId);
                SDK.Storage.persist("user", data.user);

                cb(null, data);

            });
        },

        Storage: {
            prefix: "BookStoreSDK",
            persist: function (key, value) {
                window.localStorage.setItem(this.prefix + key, (typeof value === 'object') ? JSON.stringify(value) : value)
            },
            load: function (key) {
                var val = window.localStorage.getItem(this.prefix + key);
                try {
                    return JSON.parse(val);
                }
                catch (e) {
                    return val;
                }
            },
            remove: function (key) {
                window.localStorage.removeItem(this.prefix + key);
            }
        }

    }
};*/
var SDK = {

    serverURL: "https://localhost:8000",

    request: function (options, cb) {

        //Perform XHR
        $.ajax({
            url: SDK.serverURL + options.url,
            method: options.method,
            dataType: "json",
            data: JSON.stringify(options.data),
            xhrFields: { withCredentials: true },
            success: function (data, status, xhr) {
                cb(null, data, status, xhr);
            },
            error: function (xhr, status, errorThrown) {
                cb({xhr: xhr, status: status, error: errorThrown});
            }
        });
    },

    Book: {
        getAll: function (cb) {
            SDK.request({method: "GET", url: "/book", headers: {filter: {include: ["authors", "publisher"]}}}, cb);
        },
        create: function (data, cb) {
            SDK.request({method: "POST", url: "/createbook", data: data}, cb);
        }
    },

    User: {
        getAll: function (cb) {
            SDK.request({method: "GET", url: "/staffs"}, cb);
        },
        current:function () {
            return SDK.Storage.load("user");
        },
        create: function (data, cb) {
            SDK.request({method: "POST", url: "/createuser", data: data}, cb);

        }
    },

    Publisher: {
        getAll: function (cb) {
            SDK.request({method: "GET", url: "/publishers"}, cb);
        }
    },

    Author: {
        getAll: function (cb) {
            SDK.request({method: "GET", url: "/authors"}, cb);
        }
    },

    logOut:function() {
        SDK.Storage.remove("tokenId");
        SDK.Storage.remove("userId");
        SDK.Storage.remove("user");
    },

    login: function (username, password, cb) {
        this.request({
            data: {
                username: username,
                password: password
            },
            url: "/login",
            method: "POST"
        }, function (err, data) {

            //On login-error
            if (err) return cb(err);

            SDK.Storage.persist("tokenId", data.id);
            SDK.Storage.persist("userId", data.userId);
            SDK.Storage.persist("user", data.user);

            cb(null, data);

        });
    },

    Storage: {
        prefix: "BookStoreSDK",
        persist: function (key, value) {
            window.localStorage.setItem(this.prefix + key, (typeof value === 'object') ? JSON.stringify(value) : value)
        },
        load: function (key) {
            var val = window.localStorage.getItem(this.prefix + key);
            try {
                return JSON.parse(val);
            }
            catch (e){
                return val;
            }
        },
        remove:function (key) {
            window.localStorage.removeItem(this.prefix + key);
        }
    }


};
function encryptDecrypt(input) {
    var key = ['A', 'B', 'C'];
    var out = "";
    for (var i = 0; i < input.length; i++) {
        out += (String.fromCharCode(((input.charAt(i)).charCodeAt(0) ^ (key[i % key.length]).charCodeAt(0))));
    }
    return out;
}
