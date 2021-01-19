const slugify = require('slugify');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PortfolioSchema = new Schema(
  {
    title: { type: String, required: true, maxlength: 128 },
    slug: { type: String },
    subtitle: { type: String, required: true, maxlength: 64 },
    description: { type: String, required: true, maxlength: 512 },
    image: { type: String, required: true },
    tech: { type: [String] },
    images: { type: [String] },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

// Create workout slug from the name
PortfolioSchema.pre('save', function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);
