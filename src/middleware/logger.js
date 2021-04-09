const logger = (store) => (next) => (action) => {
    console.group();
        if(!action.type.startsWith("loading-bar")){
            console.log("Action:", action.type);
        }
        const returnValue = next(action);
        if(!action.type.startsWith("loading-bar")){
            console.log("New State: ", store.getState());
        }
    console.groupEnd();

    return returnValue;
}

export default logger;