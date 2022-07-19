/**
 * Function that handle most of API calls.
 * @param {string} endpoint endpoint to call
 * @param {Function} successCallback function that run when the request is successful
 * @param {Function} errorCallback function that run when the request failed
 * @param {boolean} isAsync if the request need to be async or not
 * @param {string} method method to use for the request
 * @param {string} fullUrl url to call
 */
function load(
    endpoint = null, 
    successCallback = null, 
    errorCallback = null, 
    isAsync = true, 
    method = "GET", 
    fullUrl = null, 
    parseResult = true, 
    data = null
    ){
    let xhr = new XMLHttpRequest();
    if(fullUrl != null){
        xhr.open(method, fullUrl, isAsync);
    }else{
        xhr.open(method, API_URL + endpoint, isAsync);
    }
    xhr.onload = (_) => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                if (xhr.responseType === "json") {
                    if( successCallback != null){
                        successCallback(xhr.response)
                    }
                }else{
                    console.log("INFO: Response:"+xhr.responseText);
                    try {
                        if( successCallback != null){
                            if(parseResult){
                                successCallback(JSON.parse(xhr.responseText)) 
                            }else{
                                successCallback(xhr.responseText)
                            }
                        }
                    }catch (SyntaxError) {
                        if( successCallback != null){
                            successCallback()
                        }
                    }
                }
            } else {
                console.error(xhr.statusText);
                if( errorCallback != null){
                    errorCallback()
                }
            }
        }
    };
    xhr.onerror = function (e) {
        console.error(xhr.statusText);
    };
    if (data != null){
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.setRequestHeader(
                "Content-Type",
                "application/x-www-form-urlencoded;"
            );
        xhr.responseType = "json";
    }
    if (TOKEN) {
        xhr.setRequestHeader("Authorization", "Bearer " + TOKEN);
    }
    xhr.send(data);
}

/**
 * Link a form with the function that will handle the submit action.
 * @param {string} formId Id of the element.
 * @param {string} endpoint Endpoint of the api.
 * @param {Function} func Function that will handle the submit action.
 * @param {Function} successCallback Callback function after successful request.
 * @param {Function} errorCallback Callback function after a failed request.
 * @param {boolean} convertCollaborator If we need to convert a collaborator input to send his id
 */
function attachFormSubmitEvent(formId, endpoint, func , successCallback, errorCallback, convertCollaborator = false){
    console.log("DEBUG: attachFormEvent triggered for " + formId)
    document.getElementById(formId).addEventListener("submit", () => { func(event, endpoint, successCallback, errorCallback, convertCollaborator) });
}

/**
 * Once liked to a form with attachFormSubmitEvent, handle the post request
 * @param {event} event 
 * @param {string} endpoint 
 * @param {Function} successCallback 
 * @param {Function} errorCallback 
 */
function formSubmit(event, endpoint, successCallback = null, errorCallback = null, convertCollaborator = false) {
    var url = API_URL + endpoint;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.onload = function() { // request successful
        if (xhr.status === 200) {
            if( successCallback != null){
                successCallback(xhr)
            }
        }else{
            if( errorCallback != null){
                errorCallback(xhr)
            }
        }
    };

    xhr.onerror = function() { // request failed
        alert(xhr.statusText)
    };

    if (TOKEN) {
        xhr.setRequestHeader("Authorization", "Bearer " + TOKEN);
    }
    
    if (convertCollaborator){
        let old_value = event.target.elements[0].value
        let das = old_value.split(" ")[0]

        collaborators_id_list.forEach((element) => {
            if(element[1] == das) event.target.elements[0].value = element[0]
        })

        xhr.send(new FormData(event.target)); 
        event.preventDefault();

        event.target.elements[0].value = old_value
    }else{
        xhr.send(new FormData(event.target)); 
        event.preventDefault();
    }

}
