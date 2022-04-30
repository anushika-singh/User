const mongoose= require("mongoose");
const bcrypt = require("bcrypt");

const verificationTokenSchema = mongoose.Schema(
  {
      owner: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true
      },
      token:{
          type: String,
          required: true,
      },
      createdAt: {
          type: Date,
          expires: 3600,
          default: Date.now()
      }
  }
);

// will encrypt password everytime its saved
verificationTokenSchema.pre("save", async function (next) {
  if (this.isModified("token")) {
  const salt = await bcrypt.genSalt(10);
  this.token = await bcrypt.hash(this.token, salt);
  }
  next();
});
//to decrypt
verificationTokenSchema.methods.compareToken = async function (token) {
  return await bcrypt.compare(token, this.token);
};

module.exports = mongoose.model("VerificationToken", verificationTokenSchema);