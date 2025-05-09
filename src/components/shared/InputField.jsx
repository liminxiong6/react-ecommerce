const InputField = ({
    label,
    id,
    type,
    errors,
    register,
    required,
    message,
    className,
    min,
    value,
    placeholder,
}) => {
    return (
        <div className="flex w-full flex-col gap-1">
            <label
                htmlFor={id}
                className={`${className ? className : ""} text-sm font-semibold text-slate-800`}
            >
                {label}{" "}
            </label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                className={`${className ? className : ""} rounded-md border bg-transparent px-2 py-2 text-slate-800 outline-none ${errors[id]?.message ? "border-red-500" : "border-slate-700"}`}
                {...register(id, {
                    required: { value: required, message },
                    minLength: min
                        ? {
                              value: min,
                              message: `Minimum ${min} characters is required`,
                          }
                        : null,
                    pattern:
                        type === "email"
                            ? {
                                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                  message: "Invalid email",
                              }
                            : type === "url"
                              ? {
                                    value: /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/,
                                    message: "Please enter a valid url",
                                }
                              : null,
                })}
            />

            {/* error mesages */}
            {errors[id]?.message && (
                <p className="text-sm font-semibold text-red-600">
                    {errors[id]?.message}
                </p>
            )}
        </div>
    );
};

export default InputField;
