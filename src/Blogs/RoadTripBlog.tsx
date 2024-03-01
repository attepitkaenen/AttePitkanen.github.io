import ReactPlayer from "react-player";
import { Blog } from "../Components/Blog";
import { CopyBlock, dracula } from "react-code-blocks";

const floatCode = `public Vector3 FloatPlayer()
{
  if (floatCast.IsColliding())
  {
    // using the height of the player and the closest collision point we can calculate the floatHeigh which should be 0 when floating in equilibrium
    Vector3 closestCollisionPoint = floatCast.GetCollisionPoint(GetIndexOfClosestCollider());
    float distance = Math.Abs(player.Position.Y - closestCollisionPoint.Y);
    CapsuleShape3D playerCollider = player.collisionShape3D.Shape as CapsuleShape3D;
    floatHeight = -distance + floatOffset + (playerCollider.Height / 2);

    // calculate and return forces needed to achieve equilibrium
    if (floatHeight > 0 && player.movementState != Player.MovementState.jumping)
    {
      player.isGrounded = true;
      return (Vector3.Up * floatForce * player.gravity * floatHeight) - (Vector3.Down * -player.Velocity.Y * dampingSpringStrength);
    }
    // calculate and return forces required to keep player attached to the ground in steeper downhills or stairs
    else if (floatHeight > -0.3 && player.movementState != Player.MovementState.jumping && player.isGrounded)
    {
      return Vector3.Up * 0.5f * player.gravity * floatHeight;
    }
    // if higher than 30cm away from wanted floating height, player has left the ground
    else
    {
      player.isGrounded = false;
    }
  }
  else
  {
    player.isGrounded = false;
  }
  // if nothing under return no forces
  return Vector3.Zero;
}`;

export const RoadTripBlog = () => {
  window.scrollTo(0, 0);

  return (
    <Blog title="Roadtrip">
      <div className="mx-2 lg:mx-32 p-4 flex flex-col gap-6 bg-slate-500">
        <a
          href="https://github.com/attepitkaenen/RoadTrip"
          className="text-2xl text-white disabled"
          target="_blank"
        >
          • Project repository
        </a>
        <a href="" className="text-2xl text-white">
          • Demo (coming soon)
        </a>
        <h2 className="text-3xl">About the project:</h2>
        <p className="text-xl">
          Roadtrip is coop immersive sim where you drive through Finland with
          friends. You have to find parts to build a car and then maintain the
          car to survive the whole trip. Built in Godot 4.2 using C#
        </p>
        <h2 className="text-3xl">Notable mechanics:</h2>
        <h2 className="text-3xl">Floating character controller</h2>
        <p className="text-xl">
          The character movement is unique compared to most if not all similar
          first person experiences, since it implements a floating character
          controller.
        </p>
        <p className="text-xl">
          The benefits of a floating character controller allows smooth movement
          over jagged surfaces such stairs or gaps wider than the player,
          without using colliders to smooth out the surfaces. The movement also
          feels more fluid and it adds dynamic "animations" to landing and
          walking up stairs or steep surfaces.
        </p>
        <ReactPlayer url="https://youtu.be/8hsCm19of9w" />
        <CopyBlock
          text={floatCode}
          language={"csharp"}
          showLineNumbers={true}
          theme={dracula}
        />
      </div>
    </Blog>
  );
};
