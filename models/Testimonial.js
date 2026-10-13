import mongoose from 'mongoose';

const TestimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    reviewText: {
      type: String,
      required: [true, 'Review text is required'],
      trim: true,
    },
    course: {
      type: String,
      trim: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    status: {
      type: String,
      enum: ['approved', 'pending'],
      default: 'approved',
      index: true,
    },
    isFeatured: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Testimonial || mongoose.model('Testimonial', TestimonialSchema);
