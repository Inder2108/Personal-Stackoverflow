export default [
    {
        id: 1,
        title: "All about autocomplete",
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
    {
        id: 2,
        title: "All about autocomplete",
        content: [
            {
                type: "paragraph",
                value: ""
            },
            {
                type: "code",
                value: ""
            }
        ]
    }
];
