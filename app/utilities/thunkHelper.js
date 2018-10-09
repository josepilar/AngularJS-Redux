const baseUrl = 'http://localhost:8080/api/';


export default function thunkHelper(dispatch, types, config) {
    const $http = getService('$http');
    const $q = getService('$q');
    const deferred = $q.defer();

    const [requestType, successType, errorType] = types;
    //Dispatch BEGIN action

    config.url = `${baseUrl}${config.url}`;
    config.headers = {
        API_KEY: 'g00dLuCk'
    };

    dispatch({type: requestType});

    $http(config).then(response => {
        //Dispatch SUCCESS action
        dispatch({
            type: successType,
            payload: response.data
        });
        deferred.resolve(response);
    }).catch(error => {
        //Dispatch ERROR action
        dispatch({
            type: errorType,
            payload: error
        });
        deferred.reject(response);
    });

    return deferred.promise;
}

const getInjector = () => {
    return angular.element(document.querySelector('[ng-app]') || document.querySelector('[ng-controller]')).injector();
};
const getService = (service) => {
    return getInjector().get(service);
};