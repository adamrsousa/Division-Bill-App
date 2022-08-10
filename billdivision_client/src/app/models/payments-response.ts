export interface qrCode {
    content: string;
    base64: string;
}

export class PaymentsResponse {
    referenceId!: string;
    paymentUrl!: string;
    expiresAt!: Date;
    qrcode!: qrCode;
}