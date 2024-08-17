
export default {
    async afterCreate(event) {    // Connected to "Save" button in admin panel
        const { result } = event;

        console.log(result)
        try{
            await strapi.plugins['email'].services.email.send({
                to: "mail@mxd.codes",
                from: "mail@mxd.codes",
                subject: `New comment on ${result.slug} by ${result.name}`,
                text: `${result.text}`
            })
        } catch(err) {
            console.log(err);
        }
    }
}
