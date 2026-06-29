

export async function sendMessage(formData) {
    const emailjs = await import("@emailjs/browser");
    const templateParams = {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
    };
    try {
        await emailjs.send("service_xpzqxxe", "template_0k389n9", templateParams, "BSWCWEqK2ECv6Fehh");
        return {
            success: true,
            message: "Bottle sent! \nCheck your email for new voyage."
        }
    } catch (error) {
        console.log("FAILED...", error);
        return {
            success: false,
            message: "Iceberg ahead. Change course."
        }
    } 
}