export const log = console.log
export const validate = (msg, fn) => { if (fn()) throw new Error(msg); }

export function installFetch() {
  const _oldFetch = fetch
  const spinner = document.getElementById("spinner")

  function showSpinner() {
    spinner.className = "show"
  }

  function hideSpinner() {
    spinner.className = spinner.className.replace("show", "")
  }

  window.fetch = function() {

    const fetchCall = _oldFetch.apply(this, arguments)

    showSpinner()

    fetchCall.then(function(){
      hideSpinner()
    }).catch(function(){
      hideSpinner()
    });

    return fetchCall
  }
}

