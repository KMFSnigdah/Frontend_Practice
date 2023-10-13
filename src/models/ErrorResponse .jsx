export class ErrorResponse {
    constructor(timestamp, message, details) {
        this.timestamp = timestamp;
        this.message = message;
        this.details = details;
    }
}
