package com.payment.bill.v1;

import com.payment.bill.v1.api.http.resources.request.PaymentForm;
import com.payment.bill.v1.api.http.resources.response.NewStatusPayment;
import com.payment.bill.v1.api.http.resources.response.PaymentGenerated;
import com.payment.bill.v1.domain.model.Buyer;
import com.payment.bill.v1.domain.model.GroupSpending;
import com.payment.bill.v1.domain.model.Payment;
import com.payment.bill.v1.domain.model.Person;
import org.json.JSONException;
import org.json.JSONObject;
import org.modelmapper.ModelMapper;

import java.math.BigDecimal;
import java.nio.MappedByteBuffer;
import java.util.ArrayList;
import java.util.List;

public class ObjectsDatabase {

    protected Person person1;

    protected Person person2;

    protected GroupSpending groupSpending;

    protected GroupSpending newGroupSpending;

    protected Payment payment;

    protected PaymentGenerated paymentGenerated;

    protected Buyer buyer;

    protected NewStatusPayment newStatusPayment;

    public ObjectsDatabase() throws JSONException {

        person1 = new Person();
        person1.setFirstName("Adam");
        person1.setLastName("Reis");
        person1.setDocument("999.999.999-99");
        person1.setEmail("adam@gmail.com");
        person1.setPhone("(99) 99999-9999");
        person1.setPersonalBill(BigDecimal.valueOf(12));
        person1.setFinalBill(BigDecimal.valueOf(14));


        person2 = new Person();
        person2.setFirstName("Adam2");
        person2.setLastName("Reis2");
        person2.setDocument("199.999.999-99");
        person2.setEmail("adammmm@gmail.com");
        person2.setPhone("(99) 99999-9998");
        person2.setPersonalBill(BigDecimal.valueOf(22));
        person2.setFinalBill(BigDecimal.valueOf(34));


        List<Person> personList = new ArrayList<>();
        personList.add(person1);
        personList.add(person2);

        groupSpending = new GroupSpending();
        groupSpending.setAdditionals(BigDecimal.valueOf(20));
        groupSpending.setDiscounts(BigDecimal.valueOf(27));
        groupSpending.setGlobalBill(BigDecimal.valueOf(69));
        groupSpending.setHasWaiterAdd(false);
        groupSpending.setPeopleList(personList);


        newGroupSpending = new GroupSpending();
        newGroupSpending.setAdditionals(BigDecimal.valueOf(40));
        newGroupSpending.setDiscounts(BigDecimal.valueOf(23));
        newGroupSpending.setGlobalBill(BigDecimal.valueOf(99));
        newGroupSpending.setHasWaiterAdd(true);
        newGroupSpending.setPeopleList(personList);

        buyer = new Buyer();
        buyer.setDocument(person1.getDocument());
        buyer.setEmail(person1.getEmail());
        buyer.setPhone(person1.getPhone());
        buyer.setFirstName(person1.getFirstName());
        buyer.setLastName(person1.getLastName());

        payment = new Payment();
        payment.setReferenceId("102030");
        payment.setCallbackUrl("callback");
        payment.setReturnUrl("url");
        payment.setExpiresAt("2022-05-01T16:00:00-03:00");
        payment.setId(1L);
        payment.setValue(BigDecimal.valueOf(20));
        payment.setBuyer(buyer);

        paymentGenerated = new PaymentGenerated("{\n" +
                "  \"referenceId\": \"102030\",\n" +
                "  \"paymentUrl\": \"https://app.picpay.com/checkout/NWFmMGRjNmViZDc0Y2EwMDMwNzZlYzEw\",\n" +
                "  \"expiresAt\": \"2022-05-01T16:00:00-03:00\",\n" +
                "  \"qrcode\": {\n" +
                "    \"content\": \"https://app.picpay.com/checkout/NWNlYzMxOTM1MDg1NGEwMDIwMzUxODcy\",\n" +
                "    \"base64\": \"data:image/png;base64,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\"\n" +
                "  }\n" +
                "}");

        newStatusPayment = new NewStatusPayment("{\n" +
                "  \"authorizationId\": \"555008cef7f321d00ef236333\",\n" +
                "  \"referenceId\": \"102030\",\n" +
                "  \"status\": \"paid\"\n" +
                "}");
    }

}
