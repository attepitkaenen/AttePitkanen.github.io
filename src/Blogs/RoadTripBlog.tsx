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
          Roadtrip is co-op immersive sim where you drive through Finland with
          friends. You have to find parts to build a car and then maintain the
          car to survive the whole trip. Built in Godot 4.2 using C#
        </p>
        <h2 className="text-3xl">Goals:</h2>
        <p className="text-xl">• {'>='}4 player co-op</p>
        <p className="text-xl">• Cities with quests, shops and activities</p>
        <p className="text-xl">• Cities are based on real Finnish cities using geological data for heightmaps</p>
        <p className="text-xl">• City size = 64km^2</p>
        <p className="text-xl">• Randomized roads with points of interest between cities </p>
        <p className="text-xl">• Physics based item interactions</p>

        <h2 className="text-3xl">Notable mechanics:</h2>

        <h2 className="text-3xl border-t-2">Cities</h2>
        <p className="text-xl">
          First city of the game will be based in Inari, in game Ilari. The data used for the heightmaps is laser scanning data with an accuracy of 2x2m provided by Maanmittauslaitos. The ingame maps will be on a scale of 2/3 compared to real size.
        </p>
        <p>Picture of Ilari in the Godot editor {'(view distance in the editor is not large enough for a comparison between the images below)'}</p>
        <img src="https://i.imgur.com/M2AVul9.png" alt="" className="w-96 aspect-auto"/>
        <p>Picture of Ilari in Google maps</p>
        <img src="https://i.imgur.com/cQEkgNz.png" alt="" className="w-96 aspect-auto"/>
        <p>Heightmap used for the map</p>
        <img src="https://i.imgur.com/I3WZUp3.png" alt="" className="w-96 aspect-auto"/>

        <h2 className="text-3xl border-t-2">CO-OP</h2>
        <p className="text-xl">
          One of my all time favourite genres in gaming is goof around with friends co-op games where the fun of the game is very relient on having fun with friends, e.g. Little big planet series, Minecraft, Deep Rock Galactic and the newest examples being Lethal Company and Content Warning.
        </p>
        <p className="text-xl">
          This is the reason why co-op is a must in my game and it's the foundation that the rest of the game will be built on. The multiplayer networking is implemented using a peer-to-peer model with Godot's high-level networking API in conjuction the low-level API for more taxing stuff, like item physics updates.
        </p>
        <img src="https://i.imgur.com/C78sCJb.png"></img>
        <p className="text-xl">We'll see how many players peer to peer connection can handle with the synchronized physics, but 4 players is the minimum goal I'm aiming for.</p>

        <h2 className="text-3xl border-t-2">Floating character controller</h2>
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
        <div className="hidden lg:block">
          <ReactPlayer url="https://youtu.be/8hsCm19of9w" />
        </div>
        <div className="hidden lg:block">
          <CopyBlock
            text={floatCode}
            language={"csharp"}
            showLineNumbers={true}
            theme={dracula}
          />
        </div>
      </div>
    </Blog>
  );
};
