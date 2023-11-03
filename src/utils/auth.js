import useLocalStorage from "../hooks/useLocalStorage";
export const isAuthenticated = () => {
    // eslint-disable-next-line no-unused-vars, react-hooks/rules-of-hooks
    const [currentCustomer, _setCurrentCustomer] = useLocalStorage('current-user', {});
    const isAuthenticated = currentCustomer;

    return isAuthenticated && Object.keys(isAuthenticated).length > 0 ? true : false;
};