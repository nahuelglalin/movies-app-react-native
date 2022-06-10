import ImageColors from 'react-native-image-colors';

export const getImageColors = async (uri: string) => {

    const colors = await ImageColors.getColors(uri, {});

    let primary;
    let secondary;

    try {
        const result = await ImageColors.getColors(uri, {})

        console.log(result);

        switch (result.platform) {
            case 'android':
                // android result properties
                primary = result.vibrant;
                secondary = result.average;
                break
            case 'ios':
                // iOS result properties
                primary = result.primary;
                secondary = result.secondary;
                break
            default:
                throw new Error('Unexpected platform key')
        }

        
        return {
            primary,
            secondary
        }
    } catch (err) {
        console.log(err);
    }

    return {
        primary,
        secondary
    }
}