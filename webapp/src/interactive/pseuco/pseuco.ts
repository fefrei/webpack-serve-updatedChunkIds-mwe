const interactiveElementDefinitions: { [id: string]: any } = {
    "pseuco-testing": {
        title: "pseuCo – Testing",
        getComponent: async (): Promise<any> => {
            return (await import('./pseucoTesting/pseuCoTesting')).default;
        },
        height: 400
    },
};

export default interactiveElementDefinitions;
