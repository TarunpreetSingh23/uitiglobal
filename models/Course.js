import mongoose from 'mongoose';

const ModuleSchema = new mongoose.Schema({
  number: String,
  title: String,
  description: String,
});

const InstructorSchema = new mongoose.Schema({
  name: String,
  role: String,
  imageUrl: String,
  bio: String,
});

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: String, required: true },
  category: { type: String, required: true },
  imageUrl: { type: String, required: true },
  altText: { type: String },
  tags: [String],
  tuition: { type: String },
  originalTuition: { type: String },
  nextStartDate: { type: String },
  location: { type: String },
  credential: { type: String },
  modules: [ModuleSchema],
  instructor: InstructorSchema,
}, { timestamps: true });

export default mongoose.models.Course || mongoose.model('Course', CourseSchema);
