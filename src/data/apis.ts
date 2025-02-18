export const apiDocs = [
  {
    category: "KYC Match",
    apis: [
      {
        id: "kyc-match",
        title: "KYC Match Verification",
        method: "POST",
        endpoint: "/api/kyc-match",
        description: "Verifies if a user's identity matches official records.",
        requestBody: {
          name: "string",
          idNumber: "string",
        },
        response: {
          success: {
            status: 200,
            message: "Device successfully swapped.",
          },
          errors: {
            400: {
              description: "Bad Request - Invalid Argument.",
              example: {
                status: 400,
                code: "INVALID_ARGUMENT",
                message: "Invalid request body or query parameter.",
              },
            },
            401: {
              description: "Unauthorized - Authentication failed.",
              example: {
                status: 401,
                code: "UNAUTHENTICATED",
                message: "Missing or invalid authentication credentials.",
              },
            },
            403: {
              description: "Forbidden - Insufficient permissions.",
              example: {
                status: 403,
                code: "PERMISSION_DENIED",
                message:
                  "User does not have permission to perform this action.",
              },
            },
            404: {
              description: "Not Found - Device ID not found.",
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
        description: "Checks if a phone number has recently been swapped.",
        requestBody: {
          phoneNumber: "+346661113334",
        },
        response: {
          success: {
            latestSimChange: "2025-02-18T19:54:09.915Z",
          },
          errors: {
            400: {
              description: "Bad Request - Invalid Argument.",
              example: {
                status: 400,
                code: "INVALID_ARGUMENT",
                message: "Invalid request body or query parameter.",
              },
            },
            401: {
              description: "Unauthorized - Authentication failed.",
              example: {
                status: 401,
                code: "UNAUTHENTICATED",
                message: "Missing or invalid authentication credentials.",
              },
            },
            403: {
              description: "Forbidden - Insufficient permissions.",
              example: {
                status: 403,
                code: "PERMISSION_DENIED",
                message:
                  "User does not have permission to perform this action.",
              },
            },
            404: {
              description: "Not Found - Device ID not found.",
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
        description: "Checks if a phone number has recently been swapped.",
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
              description: "Bad Request - Invalid Argument.",
              example: {
                status: 400,
                code: "INVALID_ARGUMENT",
                message: "Invalid request body or query parameter.",
              },
            },
            401: {
              description: "Unauthorized - Authentication failed.",
              example: {
                status: 401,
                code: "UNAUTHENTICATED",
                message: "Missing or invalid authentication credentials.",
              },
            },
            403: {
              description: "Forbidden - Insufficient permissions.",
              example: {
                status: 403,
                code: "PERMISSION_DENIED",
                message:
                  "User does not have permission to perform this action.",
              },
            },
            404: {
              description: "Not Found - Device ID not found.",
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
    ],
  },
  {
    category: "Device Swap",
    apis: [
      {
        id: "device-swap",
        title: "Device Swap API",
        description: "Allows users to swap their registered device.",
        endpoint: "/api/device/swap",
        method: "POST",
        requestBody: {
          userId: "string",
          oldDeviceId: "string",
          newDeviceId: "string",
        },
        response: {
          success: {
            status: 200,
            message: "Device successfully swapped.",
          },
          errors: {
            400: {
              description: "Bad Request - Invalid Argument.",
              example: {
                status: 400,
                code: "INVALID_ARGUMENT",
                message: "Invalid request body or query parameter.",
              },
            },
            401: {
              description: "Unauthorized - Authentication failed.",
              example: {
                status: 401,
                code: "UNAUTHENTICATED",
                message: "Missing or invalid authentication credentials.",
              },
            },
            403: {
              description: "Forbidden - Insufficient permissions.",
              example: {
                status: 403,
                code: "PERMISSION_DENIED",
                message:
                  "User does not have permission to perform this action.",
              },
            },
            404: {
              description: "Not Found - Device ID not found.",
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
    ],
  },
  {
    category: "Population Density",
    apis: [
      {
        id: "population-density",
        title: "Population Density Info",
        method: "GET",
        endpoint: "/api/population-density",
        description: "Provides population density data for a given location.",
        requestBody: {
          latitude: "number",
          longitude: "number",
        },
        response: {
          success: {
            status: 200,
            message: "Device successfully swapped.",
          },
          errors: {
            400: {
              description: "Bad Request - Invalid Argument.",
              example: {
                status: 400,
                code: "INVALID_ARGUMENT",
                message: "Invalid request body or query parameter.",
              },
            },
            401: {
              description: "Unauthorized - Authentication failed.",
              example: {
                status: 401,
                code: "UNAUTHENTICATED",
                message: "Missing or invalid authentication credentials.",
              },
            },
            403: {
              description: "Forbidden - Insufficient permissions.",
              example: {
                status: 403,
                code: "PERMISSION_DENIED",
                message:
                  "User does not have permission to perform this action.",
              },
            },
            404: {
              description: "Not Found - Device ID not found.",
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
    ],
  },
  {
    category: "Number Verification",
    apis: [
      {
        id: "number-verification",
        title: "Number Verification",
        method: "POST",
        endpoint: "/api/number-verification",
        description: "Validates if a phone number is active and valid.",
        requestBody: {
          phoneNumber: "string",
        },
        response: {
          success: {
            status: 200,
            message: "Device successfully swapped.",
          },
          errors: {
            400: {
              description: "Bad Request - Invalid Argument.",
              example: {
                status: 400,
                code: "INVALID_ARGUMENT",
                message: "Invalid request body or query parameter.",
              },
            },
            401: {
              description: "Unauthorized - Authentication failed.",
              example: {
                status: 401,
                code: "UNAUTHENTICATED",
                message: "Missing or invalid authentication credentials.",
              },
            },
            403: {
              description: "Forbidden - Insufficient permissions.",
              example: {
                status: 403,
                code: "PERMISSION_DENIED",
                message:
                  "User does not have permission to perform this action.",
              },
            },
            404: {
              description: "Not Found - Device ID not found.",
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
    ],
  },
];
