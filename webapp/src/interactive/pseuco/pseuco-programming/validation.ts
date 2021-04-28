export const registerValidationWorkerCallback = (): void => {
    const validateProgram = () => {
        return {};
    };

    self.onmessage = () => {
        self.postMessage(validateProgram());
    };
};
