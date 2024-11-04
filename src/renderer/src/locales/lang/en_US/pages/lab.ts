export default {
  name: 'Lab',
  nav: {
    staticFilter: 'StaticFilter',
    jsEdit: 'JsEdit',
    aiBrain: 'AiBrain',
    dataCrypto: 'DataCrypto',
    snifferPlay: 'SnifferPlay',
  },
  jsEdit: {
    import: 'Import',
    export: 'Export',
    bug: 'Debug',
    cache: 'Cache',
    encode: 'Encode',
    decode: 'Decode',
    delete: 'DeleteCase',
    file: 'Server',
    help: 'Help',
    other: 'Other',
    doc: 'Doc',
    ai: 'Ai',
    title: 'Source Tool',
    template: 'Template',
    templateTip: 'Select one default template to edit',
    encodeTip: 'Select a method to be encode code',
    run: 'Run',
    fileManage: 'File',
    sift: 'Sift',
    editSource: 'Edit',
    placeholder: {
      reqHeader: '{ "User-Agent": "Mozilla/5.0 zyfun" }',
      reqBody: '{ "key": "01b9b7" }',
    },
    rule: {
      pdfa: 'Pdfa',
      pdfh: 'Pdfh',
      try: 'Try',
      url: 'Url',
      wd: 'Wd',
      pg: 'Pg',
      t: 'T',
      f: 'F',
      ids: 'Ids',
      flag: 'Flag',
      play: 'Play',
    },
    bar: {
      title: 'Edit Params',
      theme: 'theme',
      language: 'language',
      eol: 'eol',
      wordWrap: 'wordWrap',
      disable: 'disable',
      enable: 'enable',
      autoInit: 'autoInit',
    },
    action: {
      init: 'Init',
      initStatus: 'Status',
      initManual: 'Manual',
      initAuto: 'Auto',
      classify: 'Classify',
      source: 'Source',
      obtain: 'Obtain',
      home: 'Home',
      list: 'List',
      detail: 'Detail',
      search: 'Search',
      play: 'Play',
      proxy: 'Proxy',
      player: 'Player',
      sniffer: 'Sniffer',
    },
    select: {
      log: 'Log',
      debug: 'Debug',
      source: 'Source',
      rule: 'Rule',
      f12: 'F12',
      clear: 'Clean',
      reset: 'Reset',
      format: 'Format',
      play: 'Play',
      copy: 'Copy',
      upload: 'Upload',
    },
    message: {
      openDevTools: 'Currently logs can only be viewed via Developer Tools -> Console',
      htmlNoUrl: 'The parameter url is empty',
      ruleNoHtml: 'You must get the source code first',
      ruleNoRule: 'The parameter rule is empty',
      initNoData: 'The editor content is empty',
      listNoT: 'The parameter t is empty',
      detailNoIds: 'The parameter ids is empty',
      searchNoWd: 'The parameter wd is empty',
      playNoFlag: 'The parameter flag is empty',
      playNoPlay: 'The parameter play is empty',
      proxyNoUrl: 'The parameter url is empty',
      playerNoUrl: 'The parameter url is empty',
    },
    dialog: {
      player: {
        title: 'PlayTest',
      },
      request: {
        title: 'Request Parameters',
        reqEncode: 'Response Encode',
        reqHeader: 'Request Header',
        reqBody: 'Request Body',
        cancel: 'Reset',
      },
      sniffer: {
        title: 'SnifferParameters',
        ua: 'User-Agent',
        auxiliaryRegex: 'auxiliaryRegex',
        initScript: 'InitScript',
        runScript: 'RunScript',
        cancel: 'Reset',
      },
    },
  },
  staticFilter: {
    title: 'Static Filter',
    source: 'editSource',
    demo: 'Demo',
    action: {
      source: 'Source',
    },
    rule: {
      class: 'Class',
      className: 'ClassName',
      classUrl: 'ClassUrl',
      cateExclude: 'CateExclude',
      link: 'Link',
      filter: 'Filter',
      filterInfo: 'FilterInfo',
      excludeKeys: 'ExcludeKeys',
      try: 'Try',
      ctry: 'ClassTry',
      br: 'batchResults「ClassTry」',
      tf: 'currentFilter',
      ms: 'createMatchsList',
      reg: 'Reg',
      plot: 'Plot',
      area: 'Area',
      lang: 'Lang',
      year: 'Year',
      letter: 'Letter',
      sort: 'Sort',
    },
    select: {
      debug: 'Debug',
      source: 'Source',
      reset: 'Reset',
      format: 'Format',
      copy: 'Copy',
      encode: 'Encode',
      reg: 'Reg',
    },
    placeholder: {
      classNameTip: 'Supplement Name(e.g movie&plot)',
      classUrlTip: 'Supplement Id(e.g movie&plot)',
      classParseTip: 'Selector(e.g. list;title;url;match)',
      cateExcludeTip: 'Excluded(e.g. HOME｜APP)',
      linkTip: 'Splicing fyclass(e.g. /id/fyclass.html)',
      filterTip: 'Selector(e.g. body&&.scroll-content)',
      filterInfoTip: 'Selector(e.g. key;name;type;title;url)',
    },
    dialog: {
      request: {
        title: 'Request Parameters',
        reqEncode: 'Response Encode',
        reqHeader: 'Request Header',
        reqBody: 'Request Body',
        cancel: 'Reset',
      },
    },
    message: {
      htmlNoUrl: 'The parameter url is empty',
      inputNoClassParse: 'Parms classParse is empty',
      sourceFirst: 'Get source first',
      inputNoFilterAndFilterInfo: 'Parms filter or filterInfo is empty',
      classResultisEmpty: 'Please process the major categories first',
    },
  },
  aiBrain: {
    title: 'Ai - Creativity is limitless',
    declare:
      'All content generated by the Service is generated by artificial intelligence models, the accuracy and completeness of the generated content cannot be guaranteed and does not represent our attitude or views',
    parms: 'OpenAI Parameters',
    server: 'Api Server',
    key: 'Api Key',
    model: 'Model',
    tip1: "OpenAI's official APIKey",
    tip2: 'Free APIKey',
    filter: 'Filter',
    cssSelector: 'cssSelector',
    qa: 'Q&A',
    save: 'Save',
    copy: 'Copy',
    codeSnippet: 'Code Snippet',
    demand: 'Demand',
    result: 'Result',
    instructionLibrary: 'instruction Library',
    fetch: 'Send',
    fetchTip: 'Enter someing...',
    codeSnippetTip: 'Enter html code snippet',
    message: {
      contentEmpty: 'Content is empty',
      aiParmsEmpty: 'AI parms is empty',
    },
  },
  dataCrypto: {
    nav: {
      hashCalculation: 'Hash Calculation',
      encodeDecode: 'Encode Decode',
      codeConversion: 'Code Conversion',
    },
    input: 'Input',
    output: 'Output',
    action: 'Action',
    generate: 'generate',
    encode: 'encode',
    decode: 'decode',
    message: {
      copySuccess: 'Copy success',
      copyFail: 'Copy fail',
      copyEmpty: 'Copy content is empty',
      inputEmpty: 'Input content is empty',
    },
    codeConversion: {
      unicode: 'UniCode',
      base64: 'Base64',
      html: 'Html',
      url: 'URL',
      hex: 'Hex',
      gzip: 'Gzip',
    },
    hashCalculation: {
      md516: 'MD5-16',
      md532: 'MD5-32',
      sha1: 'SHA1',
      sha224: 'SHA224',
      sha256: 'SHA256',
      sha3: 'SHA3',
      sha384: 'SHA384',
      sha512: 'SHA512',
      sha512_224: 'SHA512/224',
      sha512_256: 'SHA512/256',
    },
    encodeDecode: {
      content: 'Content',
      rsa: {
        name: 'RSA',
        padding: 'Padding',
        encode: 'Encode',
        base64: 'Base64',
        hex: 'Hex',
        oaep: 'RSA-OAEP',
        pkcs1: 'RSAES-PKCS1-V1_5',
        raw: 'RAW',
        key: 'Key',
        certType: 'CertType',
        publickKey: 'PublickKey',
        privateKey: 'PrivateKey',
        long: 'Long',
        normal: 'Normal',
        section: 'Section',
        block: 'Block',
        default: 'Default',
        auto: 'Auto',
      },
      aes: {
        name: 'AES',
        iv: 'IV',
        padding: 'Padding',
        encode: 'Encode',
        mode: 'Mode',
        key: 'Key',
        base64: 'Base64',
        hex: 'Hex',
        cbc: 'CBC',
        ctr: 'CTR',
        cfb: 'CFB',
        ofb: 'OFB',
        ecb: 'ECB',
        pkcs7: 'PKCS7',
        zeroPadding: 'ZeroPadding',
        ansiX923: 'AnsiX923',
        iso10126: 'Iso10126',
        iso97971: 'iso97971',
        noPadding: 'NoPadding',
      },
      des: {
        name: 'DES',
        iv: 'IV',
        padding: 'Padding',
        encode: 'Encode',
        mode: 'Mode',
        key: 'Key',
        base64: 'Base64',
        hex: 'Hex',
        cbc: 'CBC',
        ctr: 'CTR',
        cfb: 'CFB',
        ofb: 'OFB',
        ecb: 'ECB',
        pkcs7: 'PKCS7',
        zeroPadding: 'ZeroPadding',
        ansiX923: 'AnsiX923',
        iso10126: 'Iso10126',
        iso97971: 'iso97971',
        noPadding: 'NoPadding',
      },
      rc4: {
        name: 'RC4',
        key: 'Key',
      },
    },
  },
  snifferPlay: {
    sniffer: 'Sniffer',
    player: 'Player',
    play: 'Play',
    clear: 'Clear',
    result: 'Result',
    preview: 'Preview',
    snifferUrl: 'SnifferUrl',
    playUrl: 'PlayUrl',
    mediaType: 'MediaType',
    initScript: 'InitScript',
    runScript: 'RunScript',
    customRegex: 'CustomRegex',
    snifferExclude: 'SnifferExclude',
    message: {
      playerNoUrl: 'The play url is empty',
      snifferNoUrl: 'The sniffer url is empty',
    },
  },
};