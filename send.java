import com.rabbitmq.client.ConnectionFactory;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.Channel;

public class Send {
  private final static String QUEUE_NAME = "hello";

  public static void main(String[] argv){
    try{
      /* Create Connection to Server */
      ConnectionFactory factory = new ConnectionFactory();
      factory.setHost("localhost"); //indicatefrances
      IP if on a different machine.
      Connection connection = factory.newConnection();
      Channel channel = connection.createChannel();

      /* Declare Queue to Send to */
      channel.queueDeclare(QUEUE_NAME, false, false, false, null);
      Double message = "3.14";
      channel.basicPublish("", QUEUE_NAME, null, message.getBytes());
      System.out.println(" [x] Sent '" + message + "'");

      /* Close Channel and Connecition */
      channel.close();
      connection.close();
    } catch(Exception e){
    throws java.io.IOException {
    }
  }
}
