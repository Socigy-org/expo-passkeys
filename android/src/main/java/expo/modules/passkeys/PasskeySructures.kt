import com.google.gson.annotations.SerializedName
import expo.modules.kotlin.records.Field
import expo.modules.kotlin.records.Record

data class CreatePasskeyRequest(
    val challenge: String,
    val rp: Rp,
    val user: User,
    val pubKeyCredParams: List<PubKeyCredParams>,
    val timeout: Long,
    val attestation: String,
    val excludeCredentials: List<Any>,
    val authenticatorSelection: AuthenticatorSelection
) {
    data class Rp(
        val name: String,
        val id: String
    )

    data class User(
        val id: String,
        val name: String,
        val displayName: String
    )

    data class PubKeyCredParams(
        val type: String,
        val alg: Int
    )

    data class AuthenticatorSelection(
        val authenticatorAttachment: String,
        val requireResidentKey: Boolean,
        val residentKey: String,
        val userVerification: String
    )
}


data class CreatePasskeyResponseData(
    @SerializedName("response") val response: Response,
    @SerializedName("authenticatorAttachment") val authenticatorAttachment: String,
    @SerializedName("id") val id: String,
    @SerializedName("rawId") val rawId: String,
    @SerializedName("type") val type: String
) {
    data class Response(
        @SerializedName("clientDataJSON") val clientDataJSON: String,
        @SerializedName("attestationObject") val attestationObject: String,
        @SerializedName("transports") val transports: List<String>
    )
}

data class GetPasskeyRequest(
    val challenge: String,
    val allowCredentials: List<AllowCredentials>,
    val timeout: Long,
    val userVerification: String,
    val rpId: String,
) {
    data class AllowCredentials(
        val id: String,
        val transports: List<String>,
        val type: String,
    )
}

data class GetPasskeyResponseData(
    @SerializedName("response") val response: Response,
    @SerializedName("authenticatorAttachment") val authenticatorAttachment: String,
    @SerializedName("id") val id: String,
    @SerializedName("rawId") val rawId: String,
    @SerializedName("type") val type: String
) {
    data class Response(
        @SerializedName("clientDataJSON") val clientDataJSON: String,
        @SerializedName("authenticatorData") val authenticatorData: String,
        @SerializedName("signature") val signature: String,
        @SerializedName("userHandle") val userHandle: String
    )
}

data class UserData(
    val credentialId: String,
    val email: String,
    val publicKey: String,
    val creationDate: Long
)

class UserRecord : Record {
    @Field
    var id: String = ""

    @Field
    var name: String = ""

    @Field
    var displayName: String = ""
}

class RpRecord : Record {
    @Field
    var id: String = ""

    @Field
    var name: String = ""
}