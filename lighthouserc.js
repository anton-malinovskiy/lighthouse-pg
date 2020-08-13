module.exports = {
    ci: {
        collect: {
            url: ['https://www.prettygreen.com'],
            startServerCommand: 'rails server -e production',
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};