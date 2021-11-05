const service = () => {
    //= ===================
    // Content service
    //= ===================
  
    const request = (url, props) => {

        const defaultOptions = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const options = {
            ...defaultOptions,
            ...props,
            headers: {
                ...defaultOptions.headers,
                ...props.headers,
            }
        }

        return fetch(url, options);
    };
    return {
        get(url, props) {
            return request( url, props);
        },
        post(url, props) {

            return request(url, {...props, method: 'POST'});
        }
    };
};
  
export default service();
  