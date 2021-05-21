import { NewI } from "../features/hacker-news";

export const parseRss = (items: any[]) => items.map(el => {
    const modeledObject: NewI = {
        creator: el.creator,
        link: el.link,
        title: el.title,
        isoDate: el.isoDate,
        guid: el.guid,
    }
    return modeledObject;
});

export const getCurrentLocation = () => {
    let location = {};
    navigator.geolocation.getCurrentPosition((position) => {
        location = position.coords;
    },
        (error) => {
            console.log('User did not give permission.')
        },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        });

    return location;
}