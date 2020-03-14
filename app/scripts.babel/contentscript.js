
  'use strict';

  function addToLocalStorage(key, value) {
    localStorage.setItem(key, value)
  }

  function removeMocksFromLocalStorage() {
    localStorage.removeItem('posMock');
    localStorage.removeItem('appMock');
  }

  function isCtrlKeyPressed(event) {
    var evtobj = window.event ? event : e;
    return evtobj.ctrlKey;
  }

  function isCharacterPressed(event, character) {
    var evtobj = window.event ? event : e;
    return String.fromCharCode(evtobj.which) === character;
  }

  function getKeyValuePairs() {
    let keyValuePairs = [];
    keyValuePairs.push({character: '0', key: 'posMock', value: 'remove mocks'});
    keyValuePairs.push({character: '1', key: 'posMock', value: 'SIGCAP'});
    keyValuePairs.push({character: '2', key: 'posMock', value: 'GENERAL.Flow'});
    return keyValuePairs;  
  }

  function detectspecialkeys(event) {

    // check ctrl is pressed
    if (!isCtrlKeyPressed(event)) return;

    // check if remove mock was pressed
    if (isCharacterPressed(event, '0')) {
      removeMocksFromLocalStorage();
      return;
    }

    // check the other key pressed
    let pairs = getKeyValuePairs();
    for (let i = 0; i < pairs.length; i++) {
      if (isCharacterPressed(event, pairs[i].character)) {
        addToLocalStorage(pairs[i].key, pairs[i].value)
        break;
      }
    }
  }

  // NOTE: PLEASE ONLY EDIT THE JS FILES INSIDE SCRIPTS.BABLE. OTHER SCRIPTS WITH THE SAME NAME AS IN .BABEL ARE AUTO-GENERATED
  document.onkeypress = detectspecialkeys;
  