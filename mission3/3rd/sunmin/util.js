let timer;

export const debounce = async function( cb, sec ) {
    if ( timer ) {
        clearTimeout( timer );
    }
    timer = setTimeout( cb, sec );
}

export const alertErrorMsg = async function( error ) {
    alert( error.message );
}