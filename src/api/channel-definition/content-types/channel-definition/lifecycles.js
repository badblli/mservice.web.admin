const fs = require('fs');
const path = require('path');
let isUpdating = false; // Define isUpdating
function getIdFromChannel(channels, channel) {
    console.log('Channel:', channel);


    console.log('Channels:', channels[channel]);
    return channels[channel] || null;
}

const filePath = path.join('C:/Users/badblli/Documents/mservice.web.admin/src/components/global/sale-channel.json');

function updateEnumFile(newChannel) {
    // Read the existing file
    const component = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Check if the channel already exists
    if (!component.attributes.channel.enum.includes(newChannel)) {
        // Add the new channel
        component.attributes.channel.enum.push(newChannel);

        // Update the file
        fs.writeFileSync(filePath, JSON.stringify(component, null, 2), 'utf8');

        console.log(`${newChannel} başarıyla eklendi.`);
    } else {
        console.log(`${newChannel} zaten mevcut.`);
    }
}

function removeEnumFromFile(channel) {
    // Read the existing file
    const component = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Check if the channel exists
    const index = component.attributes.channel.enum.indexOf(channel);
    if (index !== -1) {
        // Remove the channel
        component.attributes.channel.enum.splice(index, 1);

        // Update the file
        fs.writeFileSync(filePath, JSON.stringify(component, null, 2), 'utf8');

        console.log(`${channel} başarıyla silindi.`);
    } else {
        console.log(`${channel} mevcut değil.`);
    }
}

module.exports = {
    async afterCreate(event) {
        const channels = await strapi.db.query('api::channel.channel').findMany();
        console.log('Channels:', channels);
        const { result } = event;
        console.log('Created entry:', result);

        if (!isUpdating) {
            isUpdating = true;
            try {
                // Update the saleChannel field and create saleChannelID with getIdFromChannel function
                await strapi.entityService.update('api::channel-definition.channel-definition', result.id, {
                    data: {
                        saleChannel: result.saleChannel,
                        saleChannelID: getIdFromChannel(channels, result.saleChannel)
                    }
                });

                // Update the enum file with the new channel
                updateEnumFile(result.saleChannel);
            } catch (error) {
                console.error('Error during afterCreate:', error);
            }
            isUpdating = false;
        }
    },

    async afterUpdate(event) {
        const { result } = event;
        console.log('Updated entry:', result);
        const channels = await strapi.db.query('api::channel.channel').findMany();
        console.log('Channels:', channels);

        if (!isUpdating) {
            isUpdating = true;
            try {
                // Update the saleChannelID
                await strapi.entityService.update('api::channel-definition.channel-definition', result.id, {
                    data: {
                        saleChannelID: getIdFromChannel(channels, result.saleChannel)
                    }
                });

                // Optionally, update the enum file if necessary
                updateEnumFile(result.saleChannel);
            } catch (error) {
                console.error('Error during afterUpdate:', error);
            }
            isUpdating = false;
        }
    },

    async afterDelete(event) {
        const { result } = event;
        console.log('Deleted entry:', result);

        if (!isUpdating) {
            isUpdating = true;
            try {
                // Remove the channel from the enum file if necessary
                removeEnumFromFile(result.saleChannel);
            } catch (error) {
                console.error('Error during afterDelete:', error);
            }
            isUpdating = false;
        }
    },
};
