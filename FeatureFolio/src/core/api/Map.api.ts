export const ApiMap = {
    auth: {
        google: {
            url: 'auth/google',
            method: 'POST'
        },
        me: {
            url: 'auth/me',
            method: 'GET'
        }
    },
    images: {
        getTokens: (amount: number) => ({
            url: `images/${amount}`,
            method: 'GET'
        }),
        uploadImage: (uploadUrl: string) =>  ({
            url: uploadUrl,
            method: 'PUT'
        }),
        finishedUploading: {
            url: 'images/finished',
            method: 'POST'
        }
    },
    events: {
        createEvent: {
            url: 'events/create',
            method: 'POST'
        },
        getEvents: {
            url: 'events',
            method: 'GET'
        }
    }
}