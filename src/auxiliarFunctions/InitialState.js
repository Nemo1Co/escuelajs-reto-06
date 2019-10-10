const InitialState = async (API) => {
    const response = await fetch(API);
    const data = await response.json();
    return data;
}

export default InitialState;
