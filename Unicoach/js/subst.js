// this function is from wkhtmltopdf docs
// allows to properly show elements like current page number [page], 
// page count [toPage] and other defined in Footers and Headers section 
// of https://wkhtmltopdf.org/usage/wkhtmltopdf.txt

function subst() {
    const vars = {};
    const query_strings_from_url = document.location.search.substring(1).split("&");
    for (const query_string in query_strings_from_url) {
        if (query_strings_from_url.hasOwnProperty(query_string)) {
            const temp_var = query_strings_from_url[query_string].split("=", 2);
            vars[temp_var[0]] = decodeURI(temp_var[1]);
        }
    }
    const css_selector_classes = ["page", "frompage", "topage", "webpage", "section", "subsection", "date", "isodate", "time", "title", "doctitle", "sitepage", "sitepages"];
    for (const css_class in css_selector_classes) {
        if (css_selector_classes.hasOwnProperty(css_class)) {
            const element = document.getElementsByClassName(css_selector_classes[css_class]);
            for (let j = 0; j < element.length; ++j) {
                element[j].textContent = vars[css_selector_classes[css_class]];
            }
        }
    }
}