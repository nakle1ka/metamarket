const deleteCookieByName = function(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.location.reload()
};

export default deleteCookieByName