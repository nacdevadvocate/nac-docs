export const apiDocs = [
  {
    category: "KYC Match",
    apis: [
      {
        id: "kyc-match",
        title: "KYC Match Verification",
        method: "POST",
        endpoint: "/api/kyc-match",
        description: "Verifies if a user's identity matches official records",
        requestBody: {
          phoneNumber: "+34629255833",
          idDocument: "66666666q",
          name: "Federica Sanchez Arjona",
          givenName: "Federica",
          familyName: "Sanchez Arjona",
          nameKanaHankaku: "federica",
          nameKanaZenkaku: "Ｆｅｄｅｒｉｃａ",
          middleNames: "Sanchez",
          familyNameAtBirth: "YYYY",
          address: "Tokyo-to Chiyoda-ku Iidabashi 3-10-10",
          streetName: "Nicolas Salmeron",
          streetNumber: "4",
          postalCode: "1028460",
          region: "Tokyo",
          locality: "ZZZZ",
          country: "JP",
          houseNumberExtension: "VVVV",
          birthdate: "1978-08-22",
          email: "abc@example.com",
          gender: "OTHER",
        },
        response: {
          success: {
            idDocumentMatch: "true",
            nameMatch: "true",
            givenNameMatch: "not_available",
            familyNameMatch: "not_available",
            nameKanaHankakuMatch: "true",
            nameKanaZenkakuMatch: "false",
            middleNamesMatch: "true",
            familyNameAtBirthMatch: "false",
            familyNameAtBirthMatchScore: 90,
            addressMatch: "true",
            streetNameMatch: "true",
            streetNumberMatch: "true",
            postalCodeMatch: "true",
            regionMatch: "true",
            localityMatch: "not_available",
            countryMatch: "true",
            houseNumberExtensionMatch: "not_available",
            birthdateMatch: "false",
            emailMatch: "false",
            emailMatchScore: 87,
            genderMatch: "false",
          },
          errors: {
            400: {
              description: "Bad Request",
              example: {
                status: 400,
                code: "INVALID_ARGUMENT",
                message:
                  "Client specified an invalid argument, request body or query param.",
              },
            },
            401: {
              description: "Unauthorized",
              example: {
                status: 401,
                code: "UNAUTHENTICATED",
                message:
                  "Request not authenticated due to missing, invalid, or expired credentials.",
              },
            },
            403: {
              description: "Forbidden",
              example: {
                status: 403,
                code: "PERMISSION_DENIED",
                message:
                  "Client does not have sufficient permissions to perform this action.",
              },
            },
            404: {
              description: "Not Found",
              example: {
                status: 404,
                code: "NOT_FOUND",
              },
            },
            422: {
              description: "Unprocessable Content",
              example: {
                status: 422,
                code: "SERVICE_NOT_APPLICABLE",
                message:
                  "The service is not applicable for the provided phone number",
              },
            },
          },
        },
      },
    ],
  },
  {
    category: "Sim Swap",
    apis: [
      {
        id: "sim-swap-retrieve-date",
        title: "Sim Swap Retrieve Date",
        method: "POST",
        endpoint: "/sim-swap/v0/retrieve-date",
        description:
          "The SIM swap API provides a programmable interface for developers and other users (capabilities consumers) to request the last date of a SIM swap performed on the mobile line, or, to check whether a SIM swap has been performed during a past period.",
        requestBody: {
          phoneNumber: "+346661113334",
        },
        response: {
          success: {
            latestSimChange: "2025-02-18T19:54:09.915Z",
          },
          errors: {
            400: {
              description: "Bad Request - Invalid Argument",
              example: {
                status: 400,
                code: "INVALID_ARGUMENT",
                message: "Invalid request body or query parameter.",
              },
            },
            401: {
              description: "Unauthorized - Authentication failed",
              example: {
                status: 401,
                code: "UNAUTHENTICATED",
                message: "Missing or invalid authentication credentials.",
              },
            },
            403: {
              description: "Forbidden - Insufficient permissions",
              example: {
                status: 403,
                code: "PERMISSION_DENIED",
                message:
                  "User does not have permission to perform this action.",
              },
            },
            404: {
              description: "Not Found - Device ID not found",
              example: {
                status: 404,
                code: "IDENTIFIER_NOT_FOUND",
                message: "The specified device identifier was not found.",
              },
            },
            422: {
              description: "Unprocessable Entity - Invalid identifier.",
              example: {
                status: 422,
                code: "MISSING_IDENTIFIER",
                message: "Device cannot be identified.",
              },
            },
            429: {
              description: "Too Many Requests - Rate limit exceeded.",
              example: {
                status: 429,
                code: "TOO_MANY_REQUESTS",
                message: "Request rate limit exceeded.",
              },
            },
          },
        },
      },
      {
        id: "sim-swap-check",
        title: "Sim Swap Check",
        method: "POST",
        endpoint: "/sim-swap/v0/check",
        description: "Checks if a phone number has recently been swapped",
        requestBody: {
          phoneNumber: "+346661113334",
          maxAge: 240,
        },
        response: {
          success: {
            swapped: true,
          },
          errors: {
            400: {
              description: "Bad Request - Invalid Argument",
              example: {
                status: 400,
                code: "INVALID_ARGUMENT",
                message: "Invalid request body or query parameter.",
              },
            },
            401: {
              description: "Unauthorized - Authentication failed",
              example: {
                status: 401,
                code: "UNAUTHENTICATED",
                message: "Missing or invalid authentication credentials.",
              },
            },
            403: {
              description: "Forbidden - Insufficient permissions",
              example: {
                status: 403,
                code: "PERMISSION_DENIED",
                message:
                  "User does not have permission to perform this action.",
              },
            },
            404: {
              description: "Not Found - Device ID not found",
              example: {
                status: 404,
                code: "IDENTIFIER_NOT_FOUND",
                message: "The specified device identifier was not found.",
              },
            },
            422: {
              description: "Unprocessable Entity - Invalid identifier",
              example: {
                status: 422,
                code: "MISSING_IDENTIFIER",
                message: "Device cannot be identified.",
              },
            },
            429: {
              description: "Too Many Requests - Rate limit exceeded",
              example: {
                status: 429,
                code: "TOO_MANY_REQUESTS",
                message: "Request rate limit exceeded.",
              },
            },
          },
        },
      },
    ],
  },
  {
    category: "Device Swap",
    apis: [
      {
        id: "device-swap-retrieve-data",
        title: "Device Swap Retrieve Date",
        description:
          "Get timestamp of last device swap for a mobile user account provided with phone number",
        endpoint: "/api/device-swap/retrieve-date",
        method: "POST",
        requestBody: {
          phoneNumber: "+346661113334",
        },
        response: {
          success: {
            latestDeviceChange: "2024-09-18T07:37:53.471829447Z",
          },
          errors: {
            400: {
              description: "Bad Request - Invalid Argument",
              example: {
                status: 400,
                code: "INVALID_ARGUMENT",
                message:
                  "Client specified an invalid argument, request body or query param.",
              },
            },
            401: {
              description: "Unauthorized - Authentication failed",
              example: {
                status: 401,
                code: "UNAUTHENTICATED",
                message:
                  "Request not authenticated due to missing, invalid, or expired credentials.",
              },
            },
            403: {
              description: "Forbidden - Insufficient permissions",
              example: {
                status: 403,
                code: "PERMISSION_DENIED",
                message:
                  "Client does not have sufficient permissions to perform this action.",
              },
            },
            404: {
              description: "Not Found - Device ID not found",
              example: {
                status: 404,
                code: "NOT_FOUND",
                message: "The specified resource is not found.",
              },
            },
            422: {
              description: "Unprocessable Entity - Invalid identifier",
              example: {
                status: 422,
                code: "SERVICE_NOT_APPLICABLE",
                message:
                  "The service is not available for the provided identifier.",
              },
            },
          },
        },
      },
      {
        id: "device-swap-check",
        title: "Device Swap Check",
        description:
          "Check if device swap has been performed during a past period",
        endpoint: "/api/device-swap/check",
        method: "POST",
        requestBody: {
          phoneNumber: "+346661113334",
          maxAge: 120,
        },
        response: {
          success: {
            swapped: true,
          },
          errors: {
            400: {
              description: "Bad Request - Invalid Argument",
              example: {
                status: 400,
                code: "INVALID_ARGUMENT",
                message:
                  "Client specified an invalid argument, request body or query param.",
              },
            },
            401: {
              description: "Unauthorized - Authentication failed",
              example: {
                status: 401,
                code: "UNAUTHENTICATED",
                message:
                  "Request not authenticated due to missing, invalid, or expired credentials.",
              },
            },
            403: {
              description: "Forbidden - Insufficient permissions",
              example: {
                status: 403,
                code: "PERMISSION_DENIED",
                message:
                  "Client does not have sufficient permissions to perform this action.",
              },
            },
            404: {
              description: "Not Found - Device ID not found",
              example: {
                status: 404,
                code: "NOT_FOUND",
                message: "The specified resource is not found.",
              },
            },
            422: {
              description: "Unprocessable Entity - Invalid identifier",
              example: {
                status: 422,
                code: "SERVICE_NOT_APPLICABLE",
                message:
                  "The service is not available for the provided identifier.",
              },
            },
          },
        },
      },
    ],
  },

  {
    category: "Population Density",
    apis: [
      {
        id: "population-density-data",
        title: "Population Density Data",
        method: "POST",
        endpoint: "/api/population-density-data/retrieve",
        description: "Provides population density data for a given location",
        requestBody: {
          area: {
            areaType: "POLYGON",
            boundary: [
              {
                latitude: 45.754114,
                longitude: 4.860374,
              },
              {
                latitude: 45.753845,
                longitude: 4.863185,
              },
              {
                latitude: 45.75249,
                longitude: 4.861876,
              },
              {
                latitude: 45.751224,
                longitude: 4.861125,
              },
              {
                latitude: 45.751442,
                longitude: 4.859827,
              },
            ],
          },
          startTime: "2024-04-23T14:44:18.165Z",
          endTime: "2024-04-23T14:44:18.165Z",
          precision: 7,
        },
        response: {
          success: {
            status: "SUPPORTED_AREA",
            timedPopulationDensityData: [
              {
                startTime: "2024-01-03T10:00:00Z",
                endTime: "2024-01-03T11:00:00Z",
                cellPopulationDensityData: [
                  {
                    geohash: "ezdqemf",
                    dataType: "DENSITY_ESTIMATION",
                    maxPplDensity: 150,
                    minPplDensity: 30,
                    pplDensity: 60,
                  },
                  {
                    geohash: "ezdqemg",
                    dataType: "DENSITY_ESTIMATION",
                    maxPplDensity: 100,
                    minPplDensity: 40,
                    pplDensity: 90,
                  },
                  {
                    geohash: "ezdqemu",
                    dataType: "LOW_DENSITY",
                  },
                ],
              },
              {
                startTime: "2024-01-03T11:00:00Z",
                endTime: "2024-01-03T12:00:00Z",
                cellPopulationDensityData: [
                  {
                    geohash: "ezdqemf",
                    dataType: "DENSITY_ESTIMATION",
                    maxPplDensity: 100,
                    minPplDensity: 30,
                    pplDensity: 70,
                  },
                  {
                    geohash: "ezdqemg",
                    dataType: "DENSITY_ESTIMATION",
                    maxPplDensity: 200,
                    minPplDensity: 40,
                    pplDensity: 100,
                  },
                  {
                    geohash: "ezdqemu",
                    dataType: "DENSITY_ESTIMATION",
                    maxPplDensity: 200,
                    minPplDensity: 40,
                    pplDensity: 100,
                  },
                ],
              },
            ],
          },
          errors: {
            400: {
              description: "Bad Request - Invalid Argument",
              example: {
                status: 400,
                code: "INVALID_ARGUMENT",
                message: "Invalid input",
              },
            },
            401: {
              description: "Unauthorized - Authentication failed",
              example: {
                status: 401,
                code: "UNAUTHENTICATED",
                message:
                  "Request not authenticated due to missing, invalid, or expired credentials.",
              },
            },
            403: {
              description: "Forbidden - Insufficient permissions",
              example: {
                status: 403,
                code: "PERMISSION_DENIED",
                message:
                  "Client does not have sufficient permissions to perform this action.",
              },
            },
            404: {
              description: "Not Found - Device ID not found",
              example: {
                status: 404,
                code: "NOT_FOUND",
                message: "The specified resource is not found.",
              },
            },
            422: {
              description: "Unprocessable Entity - Unsupported Request",
              example: {
                status: 422,
                code: "POPULATION_DENSITY_DATA.UNSUPPORTED_REQUEST",
                message:
                  "Indicated combination of area, time interval and precision is too big",
              },
            },
            429: {
              description: "Too Many Requests - Rate limit exceeded",
              example: {
                status: 429,
                code: "QUOTA_EXCEEDED",
                message: "Out of resource quota.",
              },
            },
          },
        },
      },
    ],
  },
  {
    category: "Number Verification",
    apis: [
      {
        id: "number-verification-verify",
        title: "Number Verification Verify",
        method: "POST",
        endpoint: "/api/number-verification/verify",
        description:
          "Verifies if the received hashed/plain text phone number matches the phone number associated with the access token",
        requestBody: {
          phoneNumber: "+123456789",
        },
        response: {
          success: {
            devicePhoneNumberVerified: true,
          },
          errors: {
            400: {
              description: "Bad Request - Invalid Argument",
              example: {
                status: 400,
                code: "INVALID_ARGUMENT",
                message:
                  "Client specified an invalid argument, request body or query param",
              },
            },
            401: {
              description: "Unauthorized - Authentication failed",
              example: {
                status: 401,
                code: "UNAUTHENTICATED",
                message:
                  "Request not authenticated due to missing, invalid, or expired credentials.",
              },
            },
            403: {
              description: "Forbidden - Insufficient permissions",
              example: {
                status: 403,
                code: "PERMISSION_DENIED",
                message:
                  "Client does not have sufficient permissions to perform this action.",
              },
            },
            404: {
              description: "Not Found - Device ID not found",
              example: {
                status: 404,
                code: "IDENTIFIER_NOT_FOUND",
                message: "The specified device identifier was not found.",
              },
            },
          },
        },
      },
      {
        id: "number-verification-share",
        title: "Number Verification Share",
        method: "GET",
        endpoint: "/api/number-verification/device-phone-number",
        description:
          "Returns the phone number associated with the access token",
        requestBody: {},
        response: {
          success: {
            devicePhoneNumber: "+123456789",
          },
          errors: {
            400: {
              description: "Bad Request - Invalid Argument",
              example: {
                status: 400,
                code: "INVALID_ARGUMENT",
                message:
                  "Client specified an invalid argument, request body or query param",
              },
            },
            401: {
              description: "Unauthorized - Authentication failed",
              example: {
                status: 401,
                code: "UNAUTHENTICATED",
                message:
                  "Request not authenticated due to missing, invalid, or expired credentials.",
              },
            },
            403: {
              description: "Forbidden - Insufficient permissions",
              example: {
                status: 403,
                code: "PERMISSION_DENIED",
                message:
                  "Client does not have sufficient permissions to perform this action.",
              },
            },
          },
        },
      },
    ],
  },
  {
    category: "Quality On Demand",
    apis: [
      {
        id: "create-qod-session",
        title: "Create QoD Session",
        method: "POST",
        endpoint: "/qod/v0/sessions",
        description: "Creates device communication bandwidth (QoS) service",
        requestBody: {
          qosProfile: "string",
          device: {
            phoneNumber: "+7820786514",
            networkAccessIdentifier: "<networkaccessidentifier>",
            ipv4Address: {
              publicAddress: "string",
              privateAddress: "string",
              publicPort: 65535,
            },
            ipv6Address: "string",
          },
          devicePorts: {
            ranges: [
              {
                from: 65535,
                to: 65535,
              },
            ],
            ports: [0],
          },
          applicationServer: {
            ipv4Address: "string",
            ipv6Address: "string",
          },
          applicationServerPorts: {
            ranges: [
              {
                from: 65535,
                to: 65535,
              },
            ],
            ports: [0],
          },
          webhook: {
            notificationUrl: "https://application-server.com",
            notificationAuthToken: "<notificationAuthToken>",
          },
          duration: 1,
        },
        response: {
          success: {
            qosProfile: "string",
            device: {
              phoneNumber: "+378947098",
              networkAccessIdentifier: "<networkAccessIdentifier>",
              ipv4Address: {
                publicAddress: "string",
                privateAddress: "string",
                publicPort: 65535,
              },
              ipv6Address: "string",
            },
            devicePorts: {
              ranges: [
                {
                  from: 65535,
                  to: 65535,
                },
              ],
              ports: [0],
            },
            applicationServer: {
              ipv4Address: "string",
              ipv6Address: "string",
            },
            applicationServerPorts: {
              ranges: [
                {
                  from: 65535,
                  to: 65535,
                },
              ],
              ports: [0],
            },
            webhook: {
              notificationUrl: "https://application-server.com",
              notificationAuthToken: "<notificationAuthToken>",
            },
            sessionId: "string",
            qosStatus: "REQUESTED",
            startedAt: "2025-02-19T15:26:33.336Z",
            expiresAt: "2025-02-19T15:26:33.336Z",
            duration: 1073741824,
          },
          errors: {
            422: {
              description: "Validation Error",
              example: {
                detail: [
                  {
                    loc: ["string", 0],
                    msg: "string",
                    type: "string",
                  },
                ],
              },
            },
          },
        },
      },
      {
        id: "get-qod-session",
        title: "Get QoD Session",
        method: "GET",
        endpoint: "/qod/v0/sessions/{session_id}",
        description: "Returns device communication Quality-on-Demand settings",
        requestBody: {},
        response: {
          success: {
            qosProfile: "string",
            device: {
              phoneNumber: "+9761276256",
              networkAccessIdentifier: "<networkAccessIdentifier>",
              ipv4Address: {
                publicAddress: "string",
                privateAddress: "string",
                publicPort: 65535,
              },
              ipv6Address: "string",
            },
            devicePorts: {
              ranges: [
                {
                  from: 65535,
                  to: 65535,
                },
              ],
              ports: [0],
            },
            applicationServer: {
              ipv4Address: "string",
              ipv6Address: "string",
            },
            applicationServerPorts: {
              ranges: [
                {
                  from: 65535,
                  to: 65535,
                },
              ],
              ports: [0],
            },
            webhook: {
              notificationUrl: "https://application-server.com",
              notificationAuthToken: "<notificationAuthToken>",
            },
            sessionId: "string",
            qosStatus: "REQUESTED",
            startedAt: "2025-02-19T15:32:53.235Z",
            expiresAt: "2025-02-19T15:32:53.235Z",
            duration: 1073741824,
          },
          errors: {
            422: {
              description: "Validation Error",
              example: {
                detail: [
                  {
                    loc: ["string", 0],
                    msg: "string",
                    type: "string",
                  },
                ],
              },
            },
          },
        },
      },
      {
        id: "delete-qod-session",
        title: "Delete QoD Session",
        method: "DELETE",
        endpoint: "/qod/v0/sessions/{session_id}",
        description: "Deletes a QoD session",
        requestBody: {},
        response: {
          success: {},
          errors: {
            422: {
              description: "Validation Error",
              example: {
                detail: [
                  {
                    loc: ["string", 0],
                    msg: "string",
                    type: "string",
                  },
                ],
              },
            },
          },
        },
      },
      {
        id: "get-all-qod-session",
        title: "Get All QoD Session",
        method: "GET",
        endpoint: "/qod/v0/sessions",
        description:
          "Return device communication Quality-on-Demand settings for your devices",
        requestBody: {},
        response: {
          success: [
            {
              qosProfile: "string",
              device: {
                phoneNumber: "+85812",
                networkAccessIdentifier: "<networkAccessIdentifier>",
                ipv4Address: {
                  publicAddress: "string",
                  privateAddress: "string",
                  publicPort: 65535,
                },
                ipv6Address: "string",
              },
              devicePorts: {
                ranges: [
                  {
                    from: 65535,
                    to: 65535,
                  },
                ],
                ports: [0],
              },
              applicationServer: {
                ipv4Address: "string",
                ipv6Address: "string",
              },
              applicationServerPorts: {
                ranges: [
                  {
                    from: 65535,
                    to: 65535,
                  },
                ],
                ports: [0],
              },
              webhook: {
                notificationUrl: "https://application-server.com",
                notificationAuthToken: "<notificationAuthToken>",
              },
              sessionId: "string",
              qosStatus: "REQUESTED",
              startedAt: "2025-02-19T15:55:19.247Z",
              expiresAt: "2025-02-19T15:55:19.247Z",
              duration: 1073741824,
            },
          ],
          errors: {},
        },
      },
      {
        id: "retrieve-all-qod-session",
        title: "Retrieve All QoD Session",
        method: "POST",
        endpoint: "/qod/v0/retrieve-sessions",
        description: "Return all QoD sessions related to the specified device",
        requestBody: {
          device: {
            phoneNumber: "+9836467916",
            networkAccessIdentifier: "<networkAccessIdentifier>",
            ipv4Address: {
              publicAddress: "string",
              privateAddress: "string",
              publicPort: 65535,
            },
            ipv6Address: "string",
          },
        },
        response: {
          success: [
            {
              qosProfile: "string",
              device: {
                phoneNumber: "+85812",
                networkAccessIdentifier: "<networkAccessIdentifier>",
                ipv4Address: {
                  publicAddress: "string",
                  privateAddress: "string",
                  publicPort: 65535,
                },
                ipv6Address: "string",
              },
              devicePorts: {
                ranges: [
                  {
                    from: 65535,
                    to: 65535,
                  },
                ],
                ports: [0],
              },
              applicationServer: {
                ipv4Address: "string",
                ipv6Address: "string",
              },
              applicationServerPorts: {
                ranges: [
                  {
                    from: 65535,
                    to: 65535,
                  },
                ],
                ports: [0],
              },
              webhook: {
                notificationUrl: "https://application-server.com",
                notificationAuthToken: "<notificationAuthToken>",
              },
              sessionId: "string",
              qosStatus: "REQUESTED",
              startedAt: "2025-02-19T15:55:19.247Z",
              expiresAt: "2025-02-19T15:55:19.247Z",
              duration: 1073741824,
            },
          ],
          errors: {
            422: {
              description: "Validation Error",
              example: {
                detail: [
                  {
                    loc: ["string", 0],
                    msg: "string",
                    type: "string",
                  },
                ],
              },
            },
          },
        },
      },
      {
        id: "retrieve-all-qod-session",
        title: "Retrieve All QoD Session",
        method: "POST",
        endpoint: "/qod/v0/sessions/{session_id}/extend",
        description:
          "Returns updated device communication Quality-on-Demand settings",
        requestBody: {
          requestedAdditionalDuration: 1,
        },
        response: {
          success: {
            qosProfile: "string",
            device: {
              phoneNumber: "+1329843604",
              networkAccessIdentifier: "<networkAccessIdentifier>",
              ipv4Address: {
                publicAddress: "string",
                privateAddress: "string",
                publicPort: 65535,
              },
              ipv6Address: "string",
            },
            devicePorts: {
              ranges: [
                {
                  from: 65535,
                  to: 65535,
                },
              ],
              ports: [0],
            },
            applicationServer: {
              ipv4Address: "string",
              ipv6Address: "string",
            },
            applicationServerPorts: {
              ranges: [
                {
                  from: 65535,
                  to: 65535,
                },
              ],
              ports: [0],
            },
            webhook: {
              notificationUrl: "https://application-server.com",
              notificationAuthToken: "<notificationAuthToken>",
            },
            sessionId: "string",
            qosStatus: "REQUESTED",
            startedAt: "2025-02-19T16:11:00.074Z",
            expiresAt: "2025-02-19T16:11:00.074Z",
            duration: 1073741824,
          },
          errors: {
            422: {
              description: "Validation Error",
              example: {
                detail: [
                  {
                    loc: ["string", 0],
                    msg: "string",
                    type: "string",
                  },
                ],
              },
            },
          },
        },
      },
    ],
  },
  {
    category: "Location Verification",
    apis: [
      {
        id: "verify-location",
        title: "Verify Location",
        method: "POST",
        endpoint: "/v0/verify",
        description: "Location verification of a device",
        requestBody: {
          device: {
            phoneNumber: "+4069007898260",
            networkAccessIdentifier: "<networkAccessIdentifier>",
            ipv4Address: {
              publicAddress: "string",
              privateAddress: "string",
              publicPort: 65535,
            },
            ipv6Address: "string",
          },
          area: {
            areaType: "CIRCLE",
            center: {
              latitude: -90,
              longitude: -180,
            },
            radius: 0,
          },
          maxAge: 60,
        },
        response: {
          success: {
            verificationResult: "TRUE",
            lastLocationTime: "2025-02-19T16:30:06.914Z",
          },
          errors: {
            422: {
              description: "Validation Error",
              example: {
                detail: [
                  {
                    loc: ["string", 0],
                    msg: "string",
                    type: "string",
                  },
                ],
              },
            },
          },
        },
      },
    ],
  },
];
