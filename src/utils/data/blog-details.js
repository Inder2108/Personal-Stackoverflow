export default {
    10000001: {
        content: [
            {
                type: "paragraph",
                value: "This is a content"
            },
            {
                type: "code",
                value: `
    if (contentObj.type === "paragraph") {
        return <p class="card-text mb-auto">{contentObj.value}</p>;
    } else {
        return <code>{contentObj.value}</code>
    }
            `
            }
        ]
    },
    10000002: {
        content: [
            {
                type: "paragraph",
                value:
                    "Given a list of markers, google API provides an easy way to figure out the exact geographical center of all these markers. The idea is to keep extending 'bounds' based on markers and then find out the center. Code below:"
            },
            {
                type: "code",
                value: `
    var bounds = new google.maps.LatLngBounds();
    var marker1 = new google.maps.Marker({position: new google.maps.LatLng({"lat":48.64244,"lng":2.22988})});
    var marker2 = new google.maps.Marker({position: new google.maps.LatLng({"lat":-33.8688,"lng":151.209295})});
    bounds.extend(marker1.position);
    bounds.extend(marker2.position);
    console.log(bounds.getCenter().lat(),bounds.getCenter().lng());
                `
            }
        ]
    }
};
