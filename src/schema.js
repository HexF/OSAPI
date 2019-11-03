const {gql} = require('apollo-server');

module.exports = gql`
  type OperatingSystem {
    id: Int!
    name: String!
    version: String!
    downloads: [Download!]!
  }

  type Download {
    id: Int!
    type: DownloadType!
    signature: String!
    url: String!
    operatingSystem: OperatingSystem!
    location: DownloadLocation!
  }

  enum DownloadType {
    TORRENT
    HTTP
  }

  enum DownloadLocation {
    AF
    AX
    AL
    DZ
    AS
    AD
    AO
    AI
    AQ
    AG
    AR
    AM
    AW
    AU
    AT
    AZ
    BS
    BH
    BD
    BB
    BY
    BE
    BZ
    BJ
    BM
    BT
    BO
    BQ
    BA
    BW
    BV
    BR
    IO
    BN
    BG
    BF
    BI
    KH
    CM
    CA
    CV
    KY
    CF
    TD
    CL
    CN
    CX
    CC
    CO
    KM
    CG
    CD
    CK
    CR
    CI
    HR
    CU
    CW
    CY
    CZ
    DK
    DJ
    DM
    DO
    EC
    EG
    SV
    GQ
    ER
    EE
    ET
    FK
    FO
    FJ
    FI
    FR
    GF
    PF
    TF
    GA
    GM
    GE
    DE
    GH
    GI
    GR
    GL
    GD
    GP
    GU
    GT
    GG
    GN
    GW
    GY
    HT
    HM
    VA
    HN
    HK
    HU
    IS
    IN
    ID
    IR
    IQ
    IE
    IM
    IL
    IT
    JM
    JP
    JE
    JO
    KZ
    KE
    KI
    KP
    KR
    KW
    KG
    LA
    LV
    LB
    LS
    LR
    LY
    LI
    LT
    LU
    MO
    MK
    MG
    MW
    MY
    MV
    ML
    MT
    MH
    MQ
    MR
    MU
    YT
    MX
    FM
    MD
    MC
    MN
    ME
    MS
    MA
    MZ
    MM
    NA
    NR
    NP
    NL
    NC
    NZ
    NI
    NE
    NG
    NU
    NF
    MP
    NO
    OM
    PK
    PW
    PS
    PA
    PG
    PY
    PE
    PH
    PN
    PL
    PT
    PR
    QA
    RE
    RO
    RU
    RW
    BL
    SH
    KN
    LC
    MF
    PM
    VC
    WS
    SM
    ST
    SA
    SN
    RS
    SC
    SL
    SG
    SX
    SK
    SI
    SB
    SO
    ZA
    GS
    SS
    ES
    LK
    SD
    SR
    SJ
    SZ
    SE
    CH
    SY
    TW
    TJ
    TZ
    TH
    TL
    TG
    TK
    TO
    TT
    TN
    TR
    TM
    TC
    TV
    UG
    UA
    AE
    GB
    US
    UM
    UY
    UZ
    VU
    VE
    VN
    VG
    VI
    WF
    EH
    YE
    ZM
    ZW
  }

  type Query {
    allOperatingSystems: [OperatingSystem!]!

    operatingSystem(id: Int!): OperatingSystem!
    operatingSystemsByName(name: String!): [OperatingSystem!]!
    operatingSystemByNameAndVersion(
      name: String!
      version: String!
    ): OperatingSystem!

    download(id: Int!): Download!
    downloads(osId: Int!, type: DownloadType): [Download!]!
    downloadBest(
      osId: Int!
      type: DownloadType!
      location: String
    ): Download
  }

  type Mutation {
    createOperatingSystem(name: String!, version: String!): OperatingSystem
    createDownload(
      osId: Int!
      type: DownloadType!
      signature: String!
      url: String!
      location: DownloadLocation!
    ): Download
  }
`;
