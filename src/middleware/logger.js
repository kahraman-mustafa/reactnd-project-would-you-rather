const logger = (store) => (next) => (action) => {
    console.group();
        console.log("Action:", action.type);
        const returnValue = next(action);
        console.log("New State: ", store.getState());
    console.groupEnd();

    return returnValue;
}

export default logger;