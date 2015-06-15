var apiUrl = "http://pinpointapi.geowavestaging.com/api";

var urls = {
    LOGIN: "/login",
    CREATE_ADVERTISER: "/admin/createadvertiser",
    EDIT_ADVERTISER: "/admin/editadvertiser",
    ADVERTISER_LIST: "/admin/getadvertiserlist",
    CAMPAIGN_LIST: "/admin/getcampaignlist",
    REPORT_LIST: "/admin/getreportlist"
};

var url = (path) => {
    return apiUrl + urls[path];
};

export default {url, apiUrl};