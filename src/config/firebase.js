// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD32j36pu7On-CbHb_yzVowe5_GS5gyss4",
  authDomain: "iconnect-3ab97.firebaseapp.com",
  projectId: "iconnect-3ab97",
  storageBucket: "iconnect-3ab97.appspot.com",
  messagingSenderId: "401174627411",
  appId: "1:401174627411:web:615287c526452d484ef2a6",
  measurementId: "G-2GTEK6TYJC",
};

const firebaseAdmin = {
  type: "service_account",
  project_id: "iconnect-3ab97",
  private_key_id: "74cf41994e1ca6836fb46a519909e998ac67f499",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCrhp2O/zNH6bS9\nbxGNR4+XXS9FMXe6adJ7xEX6desrcNLOrf/KLnYwlRTqgz4QuXLSM0+TiW4dgpvg\nVkVr/q22vrsSKqXxJMur1XJ/SB4wywOmACbbATxL28E3GqQ9uKIpc7xIRzmsii67\nJ/7brvnGOYzu+vIaHw72PsNrmoBjfY8LUDUtx5VMjg1Qu/tNNeW/+CLymuBpDr2t\nem3kOJqILmEbdM5bMBPZARKj6D9RrGJcYIp1ESEVjWeclwpGk++uMrJ7eQrnIFSi\ngnebcHKJP7d9arN4SMoSPMmX4JIUtxeHW8N9WOIzl+ISm+FXQekJlYJBrA6V7H8N\ncvzL1Q/jAgMBAAECggEADdVaAK3hT2PwUTTTeA707DK2PMDcFJszQAsYz7XR5RuA\nzO1oi0BLBOkJGk7CYyvpsD02JkJ3sIaXlrSufaK5FNt2D+WDo5qhmHaq+Mvyr2G4\nJhuuBoyndcC/6PdLlrS801YDsdqYsqskULDNk58dgtiiXqW7f9LQbJisPxHjV+Km\n8vYiZahbcCDeVNdnQIkk5UwQX74vHV2+cfdcIrBSVljX4w4L67aGeI30bQJmBLIV\nOFNCp5kg2t4A0XNDMGej13qoqiWjBF73cuFzdy1L9VHapezFmyJaAtWcIDOrJ5xQ\nqIJMCthSpbwUOA4Xuz2+9GJC89NlGOfw1M2xRmnWGQKBgQDqZCPLMm3dGhzkRCIE\nUh2cyGQjxjUbN9y4vDqLxEX/NRQ1xeSjvUEFFIpIVabRCzslAFCnlF7XpzeL1tih\nBWB/jTvMNxrcgapGmrqdBLfNXRmY6pK192M+i+RQ1JedeH35Mx2DCGBDM3RiKA3C\n113vI5yggpJ4H1fz8U28JBWUKQKBgQC7Vsrl7372AAHJkyo/Dd5DkcuRI8wxE810\nVNDd4mnypMcwmCOy5hRX4BNCLru57NV0XH+45Fbq6VdmP6Y2H8Pn5rjZGjDvgP80\nnaQ84VJektz1+Nm1StiOvJYVC6frB+sgRmSiMM5pL+iCQkE3NYt6H0J2K2HnblIB\n2/gC0tllKwKBgDY1ZMXY6unI4Ue1rjxblXeuLOLNM3kRCV48QjoS8bFdYEgzdXad\nDY2UO4sRLByKwWoEUaMAQJMVnFYeIUnUSYYWbu8DC5ZV8sCThndMIQpA7uubzMSC\n65QKnIpJMKt9s3zP4pJsfH7uRotxAgW+832cOdwxdpiLfzbu5vCNU+RJAoGBALqq\nF4+W3IWXqjBE7+JWGjJvkkuzRKFeHuicHmYIVRMN9t/HqEJ4mKqavfXDBRCUGHhS\nNn1vH9//0zMxlpb1fcmTDnpca4gpm6C8tspmpSFQ6tQ4Og03X6KR7GVZ8N3yTOki\n2uD1Cqaqst0f0UWGl8x+W0XNokbsmM/7cxq1JyJzAoGBALlBo/IITEXrIaonq43e\nDZb7LLT82kG9EyAAH2+oPv/D79KeIn0rWhvZlyf2eaiOTcOqR9pzkmvM1pK8QXWK\nFFFaR+taBQA2uUCGLp1IAATmjMFilUgtFWDO4yPUl0XCc22CrU7FgliQh2N/74xK\nrR1tKn0vVaUdEeK25QlAa16B\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-hwcn3@iconnect-3ab97.iam.gserviceaccount.com",
  client_id: "115549946652730408508",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-hwcn3%40iconnect-3ab97.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const appAdmin = initializeApp(?firebaseAdmin);

// for Storage
export const storage = getStorage(app);

export default app;
