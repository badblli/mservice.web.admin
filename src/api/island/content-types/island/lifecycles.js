let isUpdating = false;

function getIdFromChannel(channel) {
    console.log('Channel:', channel);
    const channels = {
        "Samosa": 1,
        "Samos": 1,     // English name: Samos, Greek name: Σάμος (Samos)
        "Σάμος": 1,     // Greek name: Σάμος (Samos)
        "Rodosa": 2,
        "Rodos": 2,     // English name: Rhodes, Greek name: Ρόδος (Rodos)
        "Rhodes": 2,
        "Ρόδος": 2,     // Greek name: Ρόδος (Rodos)
        "Midilliye": 3,
        "Midilli": 3,   // English name: Lesbos, Greek name: Λέσβος (Lesvos)
        "Lesbos": 3,
        "Λέσβος": 3,    // Greek name: Λέσβος (Lesvos)
        "Kosa": 4,
        "Kos": 4,       // English name: Kos, Greek name: Κως (Kos)
        "Κως": 4,       // Greek name: Κως (Kos)
        "Meise": 5,
        "Meis": 5,      // English name: Kastellorizo, Greek name: Καστελλόριζο (Kastellorizo)
        "Kastellorizo": 5,
        "Καστελλόριζο": 5, // Greek name: Καστελλόριζο (Kastellorizo)
        "Sakıza": 6,
        "Sakız": 6,     // English name: Chios, Greek name: Χίος (Chios)
        "Chios": 6,
        "Χίος": 6,      // Greek name: Χίος (Chios)
        "Meander": 7,   // English name: Meander (Menderes), Greek name: Μαίανδρος (Maiandros)
        "Μαίανδρος": 7  // Greek name: Μαίανδρος (Maiandros)
    };

    console.log('Channels:', channels[channel]);
    return channels[channel] || null;
}



module.exports = {
    async afterCreate(event) {
        const { result } = event;
        console.log('Created entry:', result);

        if (!isUpdating) {
            isUpdating = true;
            try {
                // Update the saleChannel field and create saleChannelID with getIdFromChannel function
                await strapi.entityService.update('api::island.island', result.id, {
                    data: {
                        saleChannel: result.saleChannel,
                        saleChannelID: getIdFromChannel(result.saleChannel),
                        subSaleChannel: result.subSaleChannel,
                        subSaleChannelID: getIdFromChannel(result.subSaleChannel)
                    }
                });


            } catch (error) {
                console.error('Error during afterCreate:', error);
            }
            isUpdating = false;
        }
    },

    async afterUpdate(event) {
        const { result } = event;
        console.log('Updated entry:', result);

        if (!isUpdating) {
            isUpdating = true;
            try {
                // Update the saleChannelID
                await strapi.entityService.update('api::island.island', result.id, {
                    data: {
                        saleChannel: result.saleChannel,
                        saleChannelID: getIdFromChannel(result.saleChannel),
                        subSaleChannel: result.subSaleChannel,
                        subSaleChannelID: getIdFromChannel(result.subSaleChannel)
                    }
                });


            } catch (error) {
                console.error('Error during afterUpdate:', error);
            }
            isUpdating = false;
        }
    },


};
