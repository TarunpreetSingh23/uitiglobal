import mongoose from 'mongoose';

const CertificateSchema = new mongoose.Schema(
  {
    certificateId: {
      type: String,
      required: [true, 'Certificate ID is required'],
      unique: true,
      trim: true,
      uppercase: true,
      index: true,
    },
    recipientName: {
      type: String,
      required: [true, 'Recipient name is required'],
      trim: true,
    },
    courseName: {
      type: String,
      required: [true, 'Course name is required'],
      trim: true,
    },
    issueDate: {
      type: Date,
      required: [true, 'Issue date is required'],
      default: Date.now,
    },
    duration: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ['Valid', 'Revoked', 'Expired'],
      default: 'Valid',
      index: true,
    },
    grade: {
      type: String,
      trim: true,
    },
    credentialType: {
      type: String,
      default: 'Industrial Training Certification',
      trim: true,
    },
    remarks: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Certificate || mongoose.model('Certificate', CertificateSchema);
